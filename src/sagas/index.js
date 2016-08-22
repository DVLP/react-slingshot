//import { take, put, call, fork, select } from 'redux-saga/effects'
import {takeEvery} from 'redux-saga';
import {call, fork} from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
//import {browserHistory} from 'react-router';

export function* searchInGoogleExample({ exampleParameter }) {
  const url = `https://www.google.co.uk/search?q=${exampleParameter}&oq=search+something&aqs=chrome..69i57.2111j0j4&sourceid=chrome&ie=UTF-8`;
  //yield browserHistory.push(url);
  yield window.location = url;
}

export function* watchSearchInGoogleExample() {
  yield call(takeEvery, types.EXAMPLE_NAMESPACE.PLACEHOLDER_ACTION, searchInGoogleExample);
}

export default function* root() {
  yield [
    fork(watchSearchInGoogleExample)
  ];
}
