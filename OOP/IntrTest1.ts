interface Info{
    message:string,
    sendMesg():string;
  }
  var invitation:Info={
     message :"Welcome to my Birthday event",
  //   sendMesg: ():string=>{
  //     return "All are invited"}
  sendMesg: function(){
    return "hi....";
  }
  }
  console.log(invitation.message);
  console.log(invitation.sendMesg());
  