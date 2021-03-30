let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
let i = 0

BtnMember.onclick=function(){
  if (members[i] == InpMember.value) {
    lblMember.value = `You are a member`
  } else {
    lblMember.value = `You are not a member`
    members.push(InpMember.value)
  }
}