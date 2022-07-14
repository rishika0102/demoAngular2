

export class UserService {


  getUser(id: string){
    if(id==='1'){
      return {
        id: '1',
        name: 'test'
      }
    } else {
        return {
        id: '3',
        name: 'test1'
      }
    }
  }
}
