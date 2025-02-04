import { Component, Input } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'nd-test-desktop',
  templateUrl: './test-desktop.component.html',
  styleUrl: './test-desktop.component.scss'
})
export class TestDesktopComponent {
  @Input() bachurId!: number;
  createTest() {
    this.exportPDF();
  }
  exportPDF() {
    const doc = new jsPDF();

    // הוספת לוגו
    const logo = 'logo.png'; // עדכן עם הנתיב ללוגו שלך
    doc.addImage(logo, 'PNG', 10, 10, 50, 25); // מיקום וגודל הלוגו
    doc.setFont("Helvetica"); // או הפונט המותאם שלך

    // הוספת טקסט
    doc.text('שם פרטי: __________________', 10, 50,{align:'right'});
    doc.text('שם משפחה: __________________', 10, 60,{align:'right'});
    doc.text('ישיבה: __________________', 10, 70,{align:'right'});

    // שמירת ה-PDF
    doc.save('document.pdf');
  }
}
