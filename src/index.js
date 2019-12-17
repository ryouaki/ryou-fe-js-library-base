/** @module ryou-cli/Demo */

/**
 * Say Hello function.
 * @param {string} name - The name which you want to say hello to him or her.
 * @return {string} The hello string.
 */
export function echoHello(name) {
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
