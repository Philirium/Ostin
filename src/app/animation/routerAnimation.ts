import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, state, stagger,
  } from '@angular/animations';


export const slidePage =   trigger('routeAnimations', [

  transition('AboutPage => HomePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '60%',
        height: '0%',
        opacity:0
        
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('0ms', style({ left: '110%', opacity:0}))
      ]),
      query(':enter', [
        animate('200ms ease-out' , style({ left: '0%' , opacity:1, 
        height:'100%', width: '100%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  
  transition('TasksPage => HomePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '60%',
        height: '0%',
        opacity:0
        
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('0ms', style({ left: '110%', opacity:0}))
      ]),
      query(':enter', [
        animate('200ms ease-out' , style({ left: '0%' , opacity:1, 
        height:'100%', width: '100%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  
  transition('HomePage  => AboutPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60%',
        height: '0%',
        opacity:0
        
      })
    ]),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('0ms', style({ right: '110%', opacity:0}))
      ]),
      query(':enter', [
        animate('200ms ease-out' , style({ right: '0%' , opacity:1, 
        height:'100%', width: '100%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  
  transition('HomePage  => TasksPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        opacity:0
        
      })
    ]),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('0ms', style({ right: '110%', opacity:0}))
      ]),
      query(':enter', [
        animate('200ms ease-out' , style({ right: '0%' , opacity:1, 
        height:'100%', width: '100%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
]);



