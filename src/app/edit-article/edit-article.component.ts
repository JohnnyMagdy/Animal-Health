import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
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
  })

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) { }

  success = false;

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.articleForm);

    // console.log("Form is valid : ", this.articleForm.valid);
    // this.articleService.addArticle(this.articleForm.value).subscribe({
    //   next: (response) => {
    //     this.success = true;
    //     this.articleForm.reset();
    //     console.log(response);
    //   }
    // })
  }

}
