pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

    contract tenant{
        
        struct agreement{
            
            string pname;
            string description;
            uint securityDeposit;
            string paymentType;
            address tenantAddress;
            bool noticePeriod; // by default false
            uint256 noticePeriodDays;
            address landlordAddress; 
            uint noticeTimeStamp; //
            string lCity;
            string propertyAddresss; //physical address
            string status; // occupied/open
    
        }
        
        mapping (address => agreement) public agrement;
        
        function signAgreement(string memory _pname, string memory _description, address  _tenant, address  _landlord, uint  _sd , string memory  _pt, uint256  _npDays, string memory _lcity, string memory _pa) public {
            
            agreement memory tmp;
            tmp.pname = _pname;
            tmp.description = _description;
            tmp.securityDeposit = _sd;
            tmp.paymentType = _pt;
            tmp.noticePeriod = false;
            tmp.noticePeriodDays = _npDays;
            tmp.propertyAddresss = _pa;
            tmp.tenantAddress = _tenant;
            tmp.landlordAddress = _landlord;
            tmp.lCity = _lcity;
            tmp.status = "occupied";  // occupied/open
            agrement[_tenant]=tmp;
          
        }
        
        function getAgreementDetails(address _tAddress) public view returns(agreement memory){
            return (agrement[_tAddress]);
        }
        
        function getPaymentDetails(address _tAddress) public view returns(string memory ){
            return (agrement[_tAddress].paymentType);
        }
        
        function giveNotice(address _tAddress) public returns(string memory){
           // keccak256(a) == keccak256(b)
            require(keccak256(abi.encodePacked(agrement[_tAddress].status)) == keccak256("occupied"));
            agrement[_tAddress].noticePeriod = true;
            uint nomnths =  agrement[_tAddress].noticePeriodDays;
            if(nomnths == 30){
                agrement[_tAddress].noticeTimeStamp = now + 30 days;
            }
            else if(nomnths == 60){
                agrement[_tAddress].noticeTimeStamp = now + 60 days;
            }
            else if(nomnths == 90){
                agrement[_tAddress].noticeTimeStamp = now + 90 days;
            }
            return "Notice period given";
        }
        function vacate(address _tAddress) public returns(string memory){
            if(withDrawSD(_tAddress) == true){
                agrement[_tAddress].status = "open";
                return "eligible for securityDeposit refund";
            }
            else{
                agrement[_tAddress].status ="open";
                return "Not eligible for securityDeposit refund";
            }
            
        }
        function withDrawSD(address _tAddress) public view returns(bool){
            if(agrement[_tAddress].noticePeriod == true && agrement[_tAddress].noticeTimeStamp < now){
                return true;
            }
            
            else{
                return false;
            }
        }
        
    }

    contract landlord{
        
        uint256 mpid=0;
        struct propertyDetails{
            string pname;
            string description;
            uint256 pid;
            uint256 securityDeposit;
            string paymentType;
            bool noticePeriod;      // false by default
            address landlordAddress;
            uint256 noticePeriodDays; //days
            string lCity;
            string propertyAddresss; //physical address
            string status; // open/occupied/pending/
        }
         mapping(address => propertyDetails[]) pDetails;
         
         function addProperty(string memory _pname, string memory _description ,uint256 _sDeposit, string memory _paymentType, uint256 _npDays, string memory _lCity, string memory _paddress) public {
            propertyDetails memory tmp;
            tmp.pname = _pname;
            tmp.description = _description;
            tmp.pid = mpid;
            tmp.securityDeposit = _sDeposit;
            tmp.paymentType = _paymentType;
            tmp.noticePeriod = false;
            tmp.landlordAddress = msg.sender;
            tmp.noticePeriodDays = _npDays;
            tmp.status = "open";
            tmp.lCity = _lCity;
            tmp.propertyAddresss = _paddress;
            pDetails[msg.sender].push(tmp);
            mpid= mpid+1;  
         }
        function getPropertyDetails(address _ad, uint256 _id) public view returns(propertyDetails memory){
         return pDetails[_ad][_id];   
        }
        function getProperityCount(address _ad) public view returns(uint256)
        { 
            return pDetails[_ad].length;
        }
        function getAllPropertyCount() public view returns(uint256){
            return mpid;
        }
        function changeStatus(address _add, uint256 _id, string memory _stat) public
        {
            pDetails[_add][_id].status=_stat;
        }
        function getStatus() public view returns(string memory ){
            return pDetails[msg.sender][0].status;
        }
        
    }