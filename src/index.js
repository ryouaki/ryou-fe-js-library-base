/** @module ryou-cli/Demo */
import _ from 'lodash';
import { test } from './test';
import { helloWorld } from '@/conl';

/**
 * Say Hello function.
 * @param {string} name - The name which you want to say hello to him or her.
 * @return {string} The hello string.
 */
export function echoHello(name) {
  _.toUpper(name);
  test();
  helloWorld();
  return `Hello ${name}`;
}

/** Class EchoHello. */
export class EchoHello {
  /**
   * Say Hello function.
   * @param {string} name - The name which you want to say hello to him or her.
   * @return {string} The hello string.
   */
  static sayHello(name) {
    return `Hello ${name}`;
  }
}
