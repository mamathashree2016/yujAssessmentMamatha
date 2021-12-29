import { Component, OnInit } from '@angular/core';
import { DirectoryService } from './../../services/directory.service'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  directories: any;
  values: any;
  searchText: any;
  constructor(private directorySrc:DirectoryService) { }

  ngOnInit(): void {
     this.directorySrc.getdirectory().subscribe((data: any) => {
      console.log(data);
      this.directories= data;
    });
  }

  search(value: string): void {
    console.log(value);
    this.directories = this.directories.filter((val: { name: string; }) => val.name.toLowerCase().includes(value));
  }
}
