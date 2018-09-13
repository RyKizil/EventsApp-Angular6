import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

declare let toastr;

@Component({
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
        <div class="row">
            <div *ngFor="let evts of events" class="col-md-5">
            <event-thumbnail (click)="handleThumbnailClick(evts.name)" [event]='evts'></event-thumbnail>
            </div>
        </div>
    </div>`
})

export class EventsListComponent implements OnInit {
    events: IEvent[]
    constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute){
        
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }
    
}