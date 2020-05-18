import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeetingAvailabilityResponse, UnviewedCountResponse } from '../intellitalk/models/MeetingAvailabilityResponse';

@Injectable({
  providedIn: 'root'
})
export class RestService {
unviewedCount: number;
baseurl = 'https://apis-qa.intellih.com/';
imageUrl = this.baseurl + 'Content/Files/ProfilePics/';
private getAvailabilityResponseUrl = this.baseurl + 'api/MeetingAvailabilityResponse/GetMeetingAvailabilityResponses';
private getUnreadResponseCountUrl = this.baseurl + 'api/MeetingAvailabilityResponse/GetUnviewedMeetingAvailabilityResponseCount';
  constructor(private http: HttpClient) { }

  getUnreadResponseCount(): Promise<UnviewedCountResponse> {
    return this.http.get<UnviewedCountResponse>(
      this.getUnreadResponseCountUrl,
      {
        headers:
        {
          'Authorization': 'bearer fp4RtjOCEGeXbPoltfWk4Zdfc3z3A99vhANW3ZG9mit0w6hncmSWCq3nbKgiVpL1PTUF0cLV2zGYDvg_l88ifTBYM8JbFLn7IyA4jcGRNkzBMIld1bHNx_fQAfzWcUj1DgLCOw66YFmqrv8gRZs87A5LoFur9_oCt18uZg8yrR0tT-hdEZtDNnN6wi7ls_SBLN4F7-7RZbqs1tairzeiabI-aA2vbI-RZ0CMlK8RegxXYmZPUWncTG7dxCaSe4WMYTW1AHfIe5hB_qLS8XHqVYS9jqkAX45fNTt6m8QnEIN7FAujNa-vZl6y3-tW7_dFj8ZEoZUeyNQK9ZLjkr3vs3ftDA8kFlolaRqz5-EpfzEcHPIetr8H70UsXhk9P-DVqtK73t3ZjO1c-F1z_Ieyt1e1zLvmyQ_dKCdfroBWDlnURiQVsaTND5xkTeJFpAzjZOqTtLMQssGov7aSWMyH9CDQjF19x6to4o2KGK4Nhk9s_wS_fRNYBvWCJ85_Kb3dTn3X_RgNW9mwoJwFauLo4w'
        }
      }
      ).toPromise();
  }

  getAvailabilityResponse(data: {EarlierThanTime: string, NumOfRecords: number}): Promise<MeetingAvailabilityResponse[]> {
    return this.http.post<MeetingAvailabilityResponse[]>(
      this.getAvailabilityResponseUrl,
      data,
      {
        headers:
        {
          'Authorization': 'bearer fp4RtjOCEGeXbPoltfWk4Zdfc3z3A99vhANW3ZG9mit0w6hncmSWCq3nbKgiVpL1PTUF0cLV2zGYDvg_l88ifTBYM8JbFLn7IyA4jcGRNkzBMIld1bHNx_fQAfzWcUj1DgLCOw66YFmqrv8gRZs87A5LoFur9_oCt18uZg8yrR0tT-hdEZtDNnN6wi7ls_SBLN4F7-7RZbqs1tairzeiabI-aA2vbI-RZ0CMlK8RegxXYmZPUWncTG7dxCaSe4WMYTW1AHfIe5hB_qLS8XHqVYS9jqkAX45fNTt6m8QnEIN7FAujNa-vZl6y3-tW7_dFj8ZEoZUeyNQK9ZLjkr3vs3ftDA8kFlolaRqz5-EpfzEcHPIetr8H70UsXhk9P-DVqtK73t3ZjO1c-F1z_Ieyt1e1zLvmyQ_dKCdfroBWDlnURiQVsaTND5xkTeJFpAzjZOqTtLMQssGov7aSWMyH9CDQjF19x6to4o2KGK4Nhk9s_wS_fRNYBvWCJ85_Kb3dTn3X_RgNW9mwoJwFauLo4w'
        }
      }
      ).toPromise();
  }
}
