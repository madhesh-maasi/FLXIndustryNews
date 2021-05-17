import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './FlxindustrynewsWebPart.module.scss';
import * as strings from 'FlxindustrynewsWebPartStrings';
import "../../ExternalRef/Css/Bootstrap.min.css";
import "../../ExternalRef/Css/style.css";
export interface IFlxindustrynewsWebPartProps { 
  description: string;    
}

export default class FlxindustrynewsWebPart extends BaseClientSideWebPart<IFlxindustrynewsWebPartProps> {

  public render(): void {   
    this.domElement.innerHTML = `
      <div class="container industry-news-section  p-0 d-flex">
      <div class="news border">
      <h5 class="bg-secondary px-4 py-2 text-white"> Industry News</h5>
      <div class="add-news px-4 py-2 border-bottom"><a class="text-info">+ Add news</a></div>
      <div class="news-list"> 
      <ul class="list-unstyled m-0">
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
      
 
      </ul>
      </div>
      </div>
      <div class="industry-sec-qlinks">  
      
      <div class="q-link mx-2 border text-center p-2"> 
    <img class="q-link-img m-2" src="https://media-exp1.licdn.com/dms/image/C5603AQG1sCX4C8uhCg/profile-displayphoto-shrink_800_800/0/1615561085905?e=1626307200&v=beta&t=SbQf_3OwRf5JSfMqg9fXLYvIwcfYWOLKl_lmJGr4qSE" alt="img"/>
    <div class="q-link-title">FLX Intelligence</div> 
    <div class="q-link-sub-title">Asset manager & FLX TV</div> 
    </div>
      
      </div>

      </div>
    `;
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
