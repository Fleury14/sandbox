import { Component } from '@angular/core';

import { TipService } from './../../services/tip.service';

import ITip from './../../interfaces/tip.interface';

@Component({
    selector: 'app-tips',
    templateUrl: './tips.component.html'
})

export class TipsComponent {

    public tips;
    public date: string;
    public content: string;

    constructor ( private _tipService: TipService) {

        this._tipService.getTasks()
            .subscribe(tips => {
                this.tips = tips;
                console.log(this.tips);
            });
    }

    public addTip(event) {
        event.preventDefault();
        console.log(this.date, this.content);
        const newTip = {
            date: new Date(),
            content: this.content,
            isDone: false
        };

        this._tipService.addTip(newTip)
            .subscribe(tip => {
                this.tips.push(newTip);
                this.date = '';
                this.content = '';
            });
    }

    deleteTip(id) {
        const tips = this.tips;

        this._tipService.deleteTip(id).subscribe(data => {
            if (data.n === 1) {
                for (let i = 0; i < tips.length; i++) {
                    if ( tips[i]._id === id ) {
                        tips.splice(i, 1);
                    }
                }
            }
        });
    }

    public updateStatus(tip) {
        const _tip = {
            _id: tip._id,
            date: tip.date,
            content: tip.content,
            isDone: !tip.isDone
        };

        this._tipService.servUpdateStatus(_tip)
            .subscribe(data => {
                tip.isDone = !tip.isDone;
            });
    }
}
