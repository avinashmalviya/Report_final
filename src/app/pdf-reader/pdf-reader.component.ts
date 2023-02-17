import { Component } from '@angular/core';
import axios from 'axios';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css']
})
export class PdfReaderComponent {

  users:any[] = []
  response:any 
  activePositionCount:any[]=[]
  totalResumesSupplied:any[]=[]
  candidateStatusOrgLevel:any[]=[]
  candidateStatusMaster:any[]=[]
  candidateStatusPostionLevel:any[] = []
  headingForCandidateStatusPositionLevel:any[]=[]
  vendorPerformancePostionLevel:any[]=[]
  vendorPerformanceOrgLevel:any[]=[]
  // PerSingleTableData:any[]=[]
  static vendorPerformancePostionLevel: any[];



    async ngOnInit(){
    this.response = await axios.get("http://demo3205980.mockable.io/get_Report_Pdf")
    console.log (this.response.data)
    this.users = this.response.data



    this.activePositionCount = this.response.data.activePositionsCount
    this.totalResumesSupplied = this.response.data.totalResumesSupplied
    this.candidateStatusOrgLevel =this.response.data.candidateStatusOrgLevel
    this.candidateStatusPostionLevel  = this.response.data.candidateStatusPostionLevel
    this.vendorPerformancePostionLevel = this.response.data.vendorPerformancePostionLevel
    this.vendorPerformanceOrgLevel = this.response.data.vendorPerformanceOrgLevel
    this.candidateStatusMaster =this.response.data.candidateStatusMaster
    this.headingForCandidateStatusPositionLevel =this.candidateStatusMaster
    console.log(this.headingForCandidateStatusPositionLevel)


    // function TableName(name:string) {
    //   for(i=0;i<=);
      
    // }




    // let Vend_res:any[] = []
    // for(let i=0; i<this.users.length; i++){
    //   for(let j=0; j<this.users[i].positionLevelCandidateStatus.length; j++){
    //     if(this.users[i].positionLevelCandidateStatus[j].jdTitle=== "New from Rsys"){
    //       Vend_res.push(this.users[i].positionLevelCandidateStatus[j])
    //  }
    //   }
    // }
    // console.log(Vend_res)




    }
    getCount(dataElement:any){
      console.log(`====`,dataElement)
  
    if( dataElement && dataElement.status && this.candidateStatusMaster.includes(dataElement.status ) )
    return dataElement.count
    }
  
    
// DATA AND TIME 
today= new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }


}







   


       
export interface vendorPerformanceData {
  did: number
  jdTitle: string
  vendorData: vendorData[]
}

export interface vendorData{
  vid: string
  name: string
  data: Data[]
}

export interface Data{
  count: number
  status: string
}
    
    
  
  


  

 
