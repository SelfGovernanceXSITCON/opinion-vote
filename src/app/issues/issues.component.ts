  import { Component } from '@angular/core';
  import { HttpClient } from '@angular/common/http';


  @Component({
    selector: 'app-issues',
    standalone: true,
    templateUrl: './issues.component.html',
    styleUrl: './issues.component.css',
    imports: [],
  })
  export class IssuesComponent {

    constructor(private http: HttpClient) {}

    users = ['leo', 'wilson', 'peter'];
    issues = ['外食環境', '衛生設施', '社團活動'];
    opinions = [
      {
        candidateName: 'leo',
        issue: '外食環境',
        statement: '推動校園內外食環境的改善，增加健康食物選擇。',
      },
      {
        candidateName: 'leo',
        issue: '衛生設施',
        statement: '提升校園衛生設施的清潔標準，增加定期檢查和維護。',
      },
      {
        candidateName: 'leo',
        issue: '社團活動',
        statement: '增加對各種社團活動的資助和支持，促進學生多元發展。',
      },
      {
        candidateName: 'wilson',
        issue: '外食環境',
        statement: '建立更多的戶外用餐空間，提高外食的舒適度和便利性。',
      },
      {
        candidateName: 'wilson',
        issue: '衛生設施',
        statement: '安排更多的公共衛生設施，如衛生紙、洗手液等，方便學生使用。',
      },
      {
        candidateName: 'peter',
        issue: '社團活動',
        statement: '引入更多的健康食品供應商，確保學生有多樣的選擇。',
      },
      {
        candidateName: 'peter',
        issue: '外食環境',
        statement:
          '推動環保衛生設施，例如環保衛生紙和清潔劑，以減少對環境的影響。',
      },
      {
        candidateName: 'peter',
        issue: '衛生設施',
        statement: '提供更多的資源給小型社團，支持他們在校園內的活動舉辦。。',
      },
      {
        candidateName: 'wilson',
        issue: '社團活動',
        statement: '建立更好的社團活動資訊平台，提升社團的曝光率和參與度。',
      },
    ];
    
    

    getOpinions(candidateName: string, issue: string) {
      return this.opinions.filter(
        (opinion) =>
          opinion.candidateName === candidateName && opinion.issue === issue
      );
    }

    highlightedCells: { [key: string]: boolean } = {};

    toggleHighlight(candidateName: string, issue: string) {
      let key;
      for (let i = 0; i < this.users.length; i++) {
        let key = `${this.users[i]}-${issue}`;
        this.highlightedCells[key] = false;
      }
      key = `${candidateName}-${issue}`;
      this.highlightedCells[key] = true;
      console.log(this.highlightedCells);
    }

    isHighlighted(candidateName: string, issue: string) {
      const key = `${candidateName}-${issue}`;
      return !!this.highlightedCells[key];
    }
  }
