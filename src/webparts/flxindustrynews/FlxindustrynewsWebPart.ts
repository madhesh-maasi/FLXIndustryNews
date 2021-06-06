import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import { SPComponentLoader } from "@microsoft/sp-loader";

SPComponentLoader.loadScript(
  // "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.2.4.min.js"
  "https://code.jquery.com/jquery-3.5.1.js"
);

import * as $ from "jquery";
import { sp } from "@pnp/sp/presets/all";
import styles from './FlxindustrynewsWebPart.module.scss';
import * as strings from 'FlxindustrynewsWebPartStrings';
import "../../ExternalRef/Css/Bootstrap.min.css";
import "../../ExternalRef/Css/style.css";
import * as moment from 'moment';
import * as Parser from 'rss-parser';

var siteURL = "";
var allitem =[];

export interface IFlxindustrynewsWebPartProps { 
  description: string;    
}

export default class FlxindustrynewsWebPart extends BaseClientSideWebPart<IFlxindustrynewsWebPartProps> {
  protected onInit(): Promise<void> {
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });       
    });          
  }         
  public render(): void {     
    siteURL = this.context.pageContext.web.absoluteUrl;
    this.domElement.innerHTML = ` 
    <div class="loader-section" style="display:none"> 
    <div class="loader"></div>  
    </div></div>
    <div class="right-border">
    <div class="headermainnews ">   
      <h5 class="headindustry">     
      Industry</h5>  
      </div>
      <div class="container industry-news-section  p-0 d-flex">
      <div class="news border">
      <h5 class="bg-secondary px-4 py-2 text-white"> Industry News</h5>
      <!--<div class="add-news px-4 py-2 border-bottom"><a class="text-info">+ Add news</a></div>-->
      <div class="news-list"> 
      <ul class="list-unstyled m-0" id="industrynews">

         

      <!--<li class="py-3 px-4 border-bottom d-flex"> 
      <div class="news-section">
      <h6 class="news-title">
      The Tell: The ‘ice is cracking’ on the bull market, one stock-market analyst warns
      </h6>   
      <div class="time-ago"> 
      Market watch . 19 minutes ago    
      </div>
      <p class="news-subtitle m-0"> 
      Prison stocks are falling Tuesday as President Joe Biden 
      is expected to sign an executive order in the...
      </p>
      </div>
      <div class="news-date time-ago">  
      Dec 2015</div>
      </li>
      <li class="py-3 px-4 border-bottom d-flex"> 
      <div class="news-section">
      <h6 class="news-title">
      The Tell: The ‘ice is cracking’ on the bull market, one stock-market analyst warns
      </h6>   
      <div class="time-ago"> 
      Market watch . 19 minutes ago    
      </div>
      <p class="news-subtitle m-0"> 
      Prison stocks are falling Tuesday as President Joe Biden 
      is expected to sign an executive order in the...
      </p>
      </div>
      <div class="news-date time-ago">  
      Dec 2015</div>
      </li>
      <li class="py-3 px-4 border-bottom d-flex"> 
      <div class="news-section">
      <h6 class="news-title">
      The Tell: The ‘ice is cracking’ on the bull market, one stock-market analyst warns
      </h6>   
      <div class="time-ago"> 
      Market watch . 19 minutes ago    
      </div>
      <p class="news-subtitle m-0"> 
      Prison stocks are falling Tuesday as President Joe Biden 
      is expected to sign an executive order in the...
      </p>
      </div>
      <div class="news-date time-ago">  
      Dec 2015</div>
      </li>
      <li class="py-3 px-4 border-bottom d-flex"> 
      <div class="news-section">
      <h6 class="news-title">
      The Tell: The ‘ice is cracking’ on the bull market, one stock-market analyst warns
      </h6>   
      <div class="time-ago"> 
      Market watch . 19 minutes ago    
      </div>     
      <p class="news-subtitle m-0"> 
      Prison stocks are falling Tuesday as President Joe Biden 
      is expected to sign an executive order in the...
      </p>
      </div>
      <div class="news-date time-ago">  
      Dec 2015</div>
      </li>
      <li class="py-3 px-4 border-bottom d-flex"> 
      <div class="news-section">
      <h6 class="news-title">
      The Tell: The ‘ice is cracking’ on the bull market, one stock-market analyst warns
      </h6>   
      <div class="time-ago"> 
      Market watch . 19 minutes ago    
      </div>
      <p class="news-subtitle m-0"> 
      Prison stocks are falling Tuesday as President Joe Biden 
      is expected to sign an executive order in the...
      </p>
      </div>
      <div class="news-date time-ago">  
      Dec 2015</div>
      </li>-->
      
 
      </ul>
      </div>
      </div>
      <div class="industry-sec-qlinks">  
      
      <div class="q-link mx-4 border text-center p-2"> 
    <div class="q-link-img m-2"></div>
    <div class="q-link-title">FLX Intelligence</div> 
    <div class="q-link-sub-title">Asset Manager Insights & FLX TV</div> 
    </div>
      
      </div>

      </div>
      </div>
    `;
const parser = new Parser()    

const fetchPosts = async () => {
  const RSS_URL = "https://api.allorigins.win/raw?url=https://www.etf.com/home.feed";
  const feed = await parser.parseURL(RSS_URL)
  //console.log(feed) 
  allitem=feed.items;
  console.log(allitem) 
  getindustrynews();
}
fetchPosts();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]          
    };
  }
}   

function getindustrynews(){
  $(".loader-section").show();
  var htmlforindustrynews="";
  var diffDT="";
  for(var i=0;i<allitem.length;i++){

    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var msecPerDay = msecPerHour * 24;
    
    // *****Setting dates*****
    
    var today = new Date();
    var startDate = new Date(allitem[i].isoDate);
    
    // *****Calculate time elapsed, in MS*****
    var interval = today.getTime() - startDate.getTime();
    
    var days = Math.floor(interval / msecPerDay );
    interval = interval - (days * msecPerDay );
    
    // var weeks = 0;
    // while(days >= 7)
    // {
    // days = days - 7;
    // weeks = weeks + 1;
    // }
    
    // var months = 0;
    // while(weeks >= 4)
    // {
    // weeks = weeks - 4;
    // months = months + 1;
    // }

    // var years = 0;
    // while(months >= 12)
    // {
    //   months = months - 12;
    //   years = years + 1;
    // }
    
    
    // Calculate the hours, minutes, and seconds.
    var hours = Math.floor(interval / msecPerHour );
    interval = interval - (hours * msecPerHour );
    
    var minutes = Math.floor(interval / msecPerMinute );

   if(days!=0)
   {
     if(days!=1)
   diffDT=days+" days ago";
   else
   diffDT=days+" day ago";
   }
   else if(hours!=0)
   {
    if(hours!=1)
    diffDT=hours+" hours ago";
    else
    diffDT=hours+" hour ago";
   }
   else if(minutes!=0)
   {
    if(minutes!=1)
    diffDT=minutes+" minutes ago";
    else
    diffDT=minutes+" minute ago";
   }
   console.log(allitem[i].pubDate);
   console.log(days);
   console.log(hours);
   console.log(minutes);
   

    htmlforindustrynews+=`<li class="py-3 px-4 border-bottom d-flex"> 
    <div class="news-section">
    <h6 class="news-title">
    ${allitem[i].title}
    </h6>   
    <div class="time-ago"> 
    ${allitem[i].creator} . ${diffDT}    
    </div>
    <p class="news-subtitle m-0"> 
    ${allitem[i].contentSnippet}
    </p>
    </div>
    <div class="news-date time-ago">  
    ${moment(allitem[i].pubDate).format("MMM YYYY")}</div>
    </li>`;
  }
  $("#industrynews").html("");
  $("#industrynews").html(htmlforindustrynews);
  $(".loader-section").hide();
}