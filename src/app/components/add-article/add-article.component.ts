import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  bannerDetails: any = {}
  addArticleForm: FormGroup;
  article: any = {};
  articleId: any;
  imagePreview: any;
  constructor(
    private articleService: ArticleService,
    private formBuilder: FormBuilder,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleId = this.activeRouter.snapshot.paramMap.get('id');
    this.bannerDetails = { title: "Add Article" };
    this.addArticleForm = this.formBuilder.group({
      title: [""],
      date: [""],
      description: [""],
      image: [""]
    })
    if (this.articleId) {
      this.articleService.sendReqToGetArticleById(this.articleId).subscribe((data) => {
        this.article = data.result
        this.bannerDetails = { title: "Edit Article" }
      })
    }
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addArticleForm.patchValue({ image: file });
    this.addArticleForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

  addOrEditArticle() {
    if (this.articleId) {
      this.articleService.sendReqToEditArticle(this.article, this.addArticleForm.value.image).subscribe((data) => {
        alert(data.result)
        this.router.navigate(['admin'])
      })
    } else {
      this.articleService.sendReqToAddArticle(this.article, this.addArticleForm.value.image).subscribe((data) => {
        alert(data.result)
        this.router.navigate(['admin'])
      })
    }
  }

}
