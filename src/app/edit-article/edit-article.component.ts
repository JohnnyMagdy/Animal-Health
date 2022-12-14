import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { IArticleDetails } from '../models/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  @Input() articleId = '';
  loading = true;
  success = false;

  articleForm: FormGroup = this.fb.group({
    Title: ['', [Validators.required]],
    Body: ['', [Validators.required]],
    Tags: ['', [Validators.required]],
    Reference: ['', [Validators.required]],
    RelatedArticle: ['', [Validators.required]],
    Createdon: ['', [Validators.required]],
    CreatedBy: ['', [Validators.required]],
    LastModifiedBy: ['', [Validators.required]],
    LastModifiedOn: ['', [Validators.required]],
  });

  editorConfig: AngularEditorConfig = {
    editable: false,
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

  constructor(private articleService: ArticleService, private fb: FormBuilder, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.articleForm.disable();
    this.getDetails();
  }

  getDetails() {
    return this.articleService.getArticleDetails(this.articleId).subscribe({
      next: (data) => {
        console.log(data);

        this.articleForm.patchValue({
          Title: data.heading,
          Body: data.body,
          // Tags: ,
          Reference: data.reference,
          // RelatedArticle: ,
          Createdon: data.publishDate,
          CreatedBy: data.authorName,
          LastModifiedBy: data.adminEditedByID,
          LastModifiedOn: data.editDate,
        });

        console.log(this.articleForm.value);

        this.cdf.detectChanges();

        this.loading = false;
      }
    });
  }

  editChanges() {
    this.articleService.addArticle(this.articleForm.value).subscribe({
      next: (response) => {
        this.success = true;
        this.articleForm.reset();
        console.log(response);
      }
    })
  }

  ActivateEditMode() {
    this.articleForm.enable();
    this.editorConfig.editable = true;
  }

}
