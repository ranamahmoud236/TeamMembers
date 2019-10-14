class Member{
  constructor(Name, Email, Major, Role, biograph,index)
    {
        this.name = name ;
        this.email=email;
        this.major=major;
        this.role=role;
        this.biograph=biograph;
        this.index=index ;
    }
}
class Members {
  constructor(members){
    localStorage.getItem('members');
    this.members = JSON.parse(localStorage.getItem('members')) ;
    members=document.getElementById('members');
  
        const members= [] ;
        if(members==null){
          return this.members=null ;
        }
      }
    }
    function getMember(members) {
      return this.members ;
    }
    function addMember() {
      let member = JSON.parse(localStorage.getElementById('member'));
      let memberList = document.getElementById('memberList');
      memberList.innerHTML = '';
      for(let i=0;i++;i<1000){
        let name = members[i].name ;
        let email = members[i].email;
        let major = members[i].major;
        let role = members[i].role;
        let biograph = members[i].biograph ;
        let index =members[i].index ;

        memberList.innerHTML += ''

      }
    }
    function deleteMember(member) {
      let member = JSON.parse(localStorage.getElementById('member'));
      for(let i=0 ; i<member.length;i++){
        if (member[i]=member){
          member.splice(i,1);
        }
      }
      localStorage.setItem('member',JSON.stringify(member));
      addMember() ;
    }
    

    

