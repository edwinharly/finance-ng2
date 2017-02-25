import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.css'],
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Finance</a>
                </div>
                <ul class="nav navbar-nav">
                  <li class="active"><a routerLink="">Home</a></li>
                  <li><a routerLink="pembelian">Pembelian</a></li>
                  <li><a routerLink="penjualan">Penjualan</a></li>
                  <li><a routerLink="setting">Settings</a></li>
                </ul>
            </div>
        </nav>
    `,
})
export class HeaderComponent {
    constructor () {
    }
}