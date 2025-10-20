import { Component } from '@angular/core';
import { Content } from "../content/content";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [Header, Sidebar, Content, Footer, RouterModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}
