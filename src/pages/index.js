// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Profile from './components/profile'
// import Gallery from './components/gallery'
// import Profile from './qcomps/profile_mistake'
// import MyComp from "@/pages/qcomps/firstcomp";
// import Bio from './qcomps/bios';
// import TodoList from "@/pages/qcomps/todos";
// import Profile from './components/profile_props'
// import Item from './qcomps/props_item'
// import MenuBar from "@/pages/qcomps/menuBar";
// import Gallery from './components/state';
// import RecipeList from "@/pages/qcomps/recipes";
// import MenuBar from "@/pages/qcomps/menuBar";
import Form from './qcomps/stuckForm'

export default function Home() {
  return (
    <div className={styles.main}>
        <Form />
    </div>
  )
}
