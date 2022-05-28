import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit, AfterViewInit {
  @ViewChild('youTubePlayerDiv') 
  youTubePlayerDiv: ElementRef<HTMLDivElement>

  videoId: string | undefined  = "6Oebyc--Tzc"
  // videoId: string | undefined  = "6v0AiLHS4c8"
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.youTubePlayerDiv.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

}
