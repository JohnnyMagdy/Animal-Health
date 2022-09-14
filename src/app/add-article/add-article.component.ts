import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleForm: FormGroup = this.fb.group({
    Heading: ['', [Validators.required]],
    Body: ['', [Validators.required]],
    Tags: ['', [Validators.required]],
    Reference: ['', [Validators.required]],
    RelatedArticle: ['', [Validators.required]],
    Createdon: ['', [Validators.required]],
    CreatedBy: ['', [Validators.required]],
    LastModifiedBy: ['', [Validators.required]],
    LastModifiedOn: ['', [Validators.required]],
  })

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '0',
    maxHeight: 'auto',
    width: '27.5rem',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [], [
        'customClasses',
        'insertImage',
        'insertVideo',
        'toggleEditorMode'
      ]
    ],
  };

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) { }

  success = false;

  ngOnInit(): void {
  }

  onSubmit() {
    this.articleService.addArticle(this.articleForm.value).subscribe({
      next: (response) => {
        this.success = true;
        this.articleForm.reset();
        console.log(response);
      }
    })
  }

}
