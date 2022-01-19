import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css']
})
export class DisplayArticleComponent implements OnInit {
  bannerDetails: any = {};
  article: any = {};
  articleId;
  constructor(
    private articleService: ArticleService,
    private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.bannerDetails = { title: "Article Info" }
    this.articleId = this.activeRouter.snapshot.paramMap.get('id');
    this.articleService.sendReqToGetArticleById(this.articleId).subscribe((data)=> {
      this.article = data.result
    })

  }

}
