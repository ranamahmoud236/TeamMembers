class Member{
  constructor(name, email, major, role, biography, time) {
        this.name = name ;
        this.email=email;
        this.major=major;
        this.role=role;
        this.biography=biography;
        this.time=time;
    }
}

class Members {
  constructor(){
    this.members = JSON.parse(localStorage.getItem('members')); // Return members array
    if(this.members == null){
      this.members = [];
    }
  }

  getMembers(members) {
    return this.members ;
  }

  addMember(newMember) {
    this.members.push(newMember);
    localStorage.setItem('members', JSON.stringify(this.members));
  }
  deleteMember(email){
    this.members = this.members.filter(function( obj ) {
      return obj.email !== email;
    });
    localStorage.setItem('members', JSON.stringify(this.members));
  }

  getMembersLength() {
    return this.members.length;
  }

  sortByName() {
    return this.members.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }

  // function deleteMember(member) {
  //   let member = JSON.parse(localStorage.getElementById('member'));
  //   for(let i=0 ; i<member.length;i++){
  //     if (member[i]=member){
  //       member.splice(i,1);
  //     }
  //   }
  //   localStorage.setItem('member',JSON.stringify(member));
  //   addMember() ;
  // }
}

let members = new Members();
let membersDiv = document.getElementById("members");

function displayMembers(all = members.getMembers()) {
  membersDiv.innerHTML = "";
  all.forEach(member => {
    let newDiv = document.createElement('div');
    newDiv.classList.add("member");
    newDiv.innerHTML = `<div class="delete" onclick="DeleteMember('${member.email}')">-
                        </div>
                        <div class="information">
                            <h1>${member.name}</h1>
                            <p class="info">
                              ${member.email} / ${member.major} / ${member.role}
                            </p>
                            <p class="text">
                              ${member.biography}
                            </p>
                        </div>`;
      membersDiv.appendChild(newDiv);
  });
}

displayMembers();

function addMembers() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let role = document.getElementById("role").value;
  let major = document.getElementById("major").value;
  let biography = document.getElementById("biography").value;
  let addToBottom = document.getElementById("addToBottom").value;
  let atIndex = document.getElementById("atIndex").value;
  let index = members.getMembersLength();

  let newMember = new Member(name, email, major, role, biography, new Date().toTimeString());
  members.addMember(newMember);
  displayMembers();
}
function DeleteMember(email) {
  members.deleteMember(email);
  displayMembers();
}

function sortByName() {
  displayMembers(members.sortByName());
}