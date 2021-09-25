import { all } from 'redux-saga/effects'
function* post(){
  yield console.log('hello saga');
}

export default function* rootSaga() {
  yield all([post()])
}