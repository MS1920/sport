import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})
export class AdminBlogsComponent implements OnInit {
  blogs: any = [];
  constructor(
    private articleService: ArticleService,
    private router:Router
    ) { }

  ngOnInit() {
    this.articleService.sendReqToGetAllArticles().subscribe((data) => {
      this.blogs = data.result
    })
  }

  goToDisplayBlog(id){
    this.router.navigate([`display-article/${id}`]);
  }

  goToEditBlog(id){
    this.router.navigate([`edit-article/${id}`]);
  }

  deleteBlog(id){
    this.articleService.sendReqToDeleteArticleById(id).subscribe((data) => {
      alert(data.result)
      this.articleService.sendReqToGetAllArticles().subscribe((data) => {
        this.blogs = data.result
      })
    })
  }
}
