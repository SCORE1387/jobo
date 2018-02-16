import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

    router: Router;
    routesWithoutSearch: string[];
    routesWithoutSubnav: string[];
    routesWithoutPostButton: string[];

    constructor(router: Router) {
        this.router = router;
        this.routesWithoutSearch = [
            "/mission",
            "/search"
        ];
        this.routesWithoutSubnav = [
            "/mission"
        ];
        this.routesWithoutPostButton = [
            "/mission"
        ];
    }

    ngOnInit() { }

    hideSearch() {
        return this.routesWithoutSearch.indexOf(this.router.url) === -1;
    }

    hideSubnav() {
        return this.routesWithoutSubnav.indexOf(this.router.url) === -1;
    }

    hidePostBtn() {
        return this.routesWithoutPostButton.indexOf(this.router.url) === -1;
    }
}

