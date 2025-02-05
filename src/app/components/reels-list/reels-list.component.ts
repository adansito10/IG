import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reels-list',
  templateUrl: './reels-list.component.html',
  styleUrls: ['./reels-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReelsListComponent {
  reels = [
    { video: 'https://videos.pexels.com/video-files/3509314/3509314-hd_1920_1080_25fps.mp4', title: 'noche de feria' },
    { video: 'https://videos.pexels.com/video-files/30414151/13033532_360_640_60fps.mp4', title: 'concierto' },
    { video: 'https://videos.pexels.com/video-files/19933502/19933502-sd_360_640_30fps.mp4', title: 'caminado en times square' },
    { video: 'https://videos.pexels.com/video-files/6479608/6479608-sd_360_640_30fps.mp4', title: 'viendo futbol' },
    { video: 'https://videos.pexels.com/video-files/6426356/6426356-sd_360_640_30fps.mp4', title: 'navidad' },
    { video: 'https://videos.pexels.com/video-files/4851872/4851872-sd_640_360_30fps.mp4', title: 'noche en tokyo' },
    { video: 'https://videos.pexels.com/video-files/6077699/6077699-sd_640_360_25fps.mp4', title: 'entrenando' },
    { video: 'https://videos.pexels.com/video-files/5908387/5908387-sd_360_640_24fps.mp4', title: 'yo y ya sabes quien' },
    { video: 'https://videos.pexels.com/video-files/4543510/4543510-sd_360_640_25fps.mp4', title: 'barber' },
    { video: 'https://videos.pexels.com/video-files/3066462/3066462-sd_960_506_24fps.mp4', title: 'carrazo' },
    { video: 'https://videos.pexels.com/video-files/4105707/4105707-sd_360_640_30fps.mp4', title: 'combi' },
    { video: 'https://videos.pexels.com/video-files/4745852/4745852-sd_640_360_30fps.mp4', title: 'año nuevo' },
    { video: 'https://videos.pexels.com/video-files/7252609/7252609-sd_360_640_25fps.mp4', title: 'relax' },
    { video: 'https://videos.pexels.com/video-files/6426356/6426356-sd_360_640_30fps.mp4', title: 'navidad' },
    { video: 'https://videos.pexels.com/video-files/30414151/13033532_360_640_60fps.mp4', title: 'concierto' },
    { video: 'https://videos.pexels.com/video-files/19933502/19933502-sd_360_640_30fps.mp4', title: 'caminado en times square' },
    { video: 'https://videos.pexels.com/video-files/6479608/6479608-sd_360_640_30fps.mp4', title: 'viendo futbol' },
    { video: 'https://videos.pexels.com/video-files/6426356/6426356-sd_360_640_30fps.mp4', title: 'navidad' },
    { video: 'https://videos.pexels.com/video-files/30414151/13033532_360_640_60fps.mp4', title: 'concierto' },
    { video: 'https://videos.pexels.com/video-files/19933502/19933502-sd_360_640_30fps.mp4', title: 'caminado en times square' },
    { video: 'https://videos.pexels.com/video-files/6479608/6479608-sd_360_640_30fps.mp4', title: 'viendo futbol' },
    { video: 'https://videos.pexels.com/video-files/6426356/6426356-sd_360_640_30fps.mp4', title: 'navidad' },
    { video: 'https://videos.pexels.com/video-files/6479608/6479608-sd_360_640_30fps.mp4', title: 'viendo futbol' },
    { video: 'https://videos.pexels.com/video-files/6426356/6426356-sd_360_640_30fps.mp4', title: 'navidad' },
  ];

  filteredReels = [...this.reels];

  constructor() {}


  togglePlay(event: Event) {
    const video = (event.target as HTMLVideoElement);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  


  

  searchReels(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredReels = this.reels.filter(reel =>
      reel.title.toLowerCase().includes(query)
    );

    
  }

}
