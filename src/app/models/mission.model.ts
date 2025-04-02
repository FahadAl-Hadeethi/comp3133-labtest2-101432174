export interface RocketCore {
    land_success: boolean;
  }
  
  export interface FirstStage {
    cores: RocketCore[];
  }
  
  export interface Rocket {
    rocket_name: string;
    rocket_type: string;
    first_stage: FirstStage;
  }
  
  export interface Links {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  }
  
  export interface LaunchSite {
    site_name_long: string;
  }
  
  export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string;
    launch_success: boolean;
    rocket: Rocket;
    links: Links;
    launch_site: LaunchSite;
  }
  