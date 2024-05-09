'use client';
import { useEffect } from "react";
import styles from "./page.module.css";
import Index from "../components/Intro"


export default function Home() {

  useEffect( ()=>{
      /*
    Below function is IIFE function.

    IIFE (Immediately Invoked Function Expression):
      1 An IIFE is a function expression that is executed immediately after being defined.
      2 It is commonly used to create a private scope for variables and functions, preventing them from polluting the global scope.
      3 The syntax involves wrapping the function in parentheses and immediately invoking it by adding () at the end.
      4 At the end we are triggering this function also by using () parenthisis.
      */

      (
        async ()=>{
          const LocomotiveScroll =(await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
        }
      )();

  },[]);

  return (
    <main className={styles.main}>
      <Index/>
    </main>
  );
}
