export interface Organizer {
    AttendeeName: string;
    ProfilePic: string;
}

export interface NonOrganizer {
    ResponseType: string;
    RespondedOn: string;
    RespondedOnFormatted?: string;
    Note?: any;
    SuggestedTime?: any;
    AttendeeName: string;
    ProfilePic: string;
    class?: string;
    ResponseText?: string;
}

export interface Meeting {
    Title: string;
    StartTime: string;
    DateFormatted?: string;
    EndTime: string;
    Organizer: Organizer;
    NonOrganizers: NonOrganizer[];
    Status: string;
    ModifiedOn: string;
}

export interface MeetingAvailabilityResponse {
    Id: string;
    RespondedByProfilePic: string;
    RespondedByName: string;
    ResponseType: string;
    RespondedOn: string;
    RespondedOnFormatted?: string;
    Note: string;
    SuggestedTime?: any;
    SuggestedTimeFormatted?: string;
    ViewedOn?: any;
    Meeting: Meeting;
    extras?: Extra;

}

export interface Extra {
    class?: string;
    message?: string;
}

export interface UnviewedCountResponse {
    UnviewedkMeetingAvailabilityResponseCount: number;
}
