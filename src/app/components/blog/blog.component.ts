import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  bannerDetails: any = {};
  blogs: any = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.bannerDetails = { title: "Blog" };
    this.articleService.sendReqToGetAllArticles().subscribe((data) => {
      this.blogs = data.result
    })
  }

}
