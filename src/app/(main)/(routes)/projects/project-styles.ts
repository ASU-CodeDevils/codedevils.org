import { css } from '@emotion/react';
import styled from '@emotion/styled';

const styles = {
    projectHub: css`
        #project-title {
        @apply flex flex-row;
        }

        #project-title h1 {
            @apply font-semibold text-asumaroon-900 order-2 cursor-pointer
                transition-all duration-100 hover:underline-offset-2 hover:underline
                md:text-5xl 
                    text-3xl;
        }

        #project-title div:nth-of-type(1) > *:first-child {
            @apply absolute text-asumaroon-800 transition-transform duration-200 hover:rotate-[-10deg] hover:scale-110
                w-24 h-24 lg:block hidden order-1 left-8 top-6 cursor-pointer;
        }

        #project-title div:nth-of-type(2) {
            @apply hidden;
        }

        #project-description {
            @apply text-lg text-zinc-700 font-medium mt-2 ml-4 leading-tight;
    
    
    `,
 
    projectPage: css`
    
    
        #project-title {
            @apply flex flex-col lg:flex-row relative w-full items-center mb-12 justify-center lg:justify-start;
        }

        #project-title h1 {
            @apply font-black 
                underline underline-offset-2 transition-all duration-100 hover:underline-offset-4
                md:text-5xl
                    text-3xl;
        }

        #project-title div:nth-of-type(1) > *:first-child {
            @apply text-asumaroon-900 transition-transform duration-200 hover:rotate-[-20deg]
                w-16 h-16 ml-4 lg:block hidden;
        }

        #project-title div:nth-of-type(2) {
            @apply lg:ml-auto md:scale-100 scale-75 mt-4 lg:mt-0;
        }




        #project-text {
            @apply text-lg md:text-xl indent-8 mb-4;
        }




        #project-stack {
            @apply flex flex-col justify-start items-center gap-2 p-4 rounded-2xl mr-4 float-left
                bg-gradient-to-b from-zinc-200 to-zinc-100 shadow-inner shadow-zinc-300
                md:w-56
                    w-32;
        }

        #project-stack svg {
            @apply w-32 h-32 hover:scale-110 transition-transform duration-200 fill-asumaroon-800;
        }




        #git-monitor {
            @apply flex flex-col text-zinc-100 float-right ml-4 -mr-4 -mt-2 mb-4;
        }

        #git-monitor {
            @apply hidden lg:block
        }

        #git-monitor div:nth-of-type(1) {
            @apply flex items-center justify-center h-[80px] w-[320px] rounded-t-lg 
                font-semibold text-2xl shadow-xl shadow-slate-700
                bg-gradient-to-r from-slate-950 to-zinc-800;
        }

        #git-monitor div:nth-of-type(2) {
            @apply h-[600px] w-[320px] rounded-b-lg
                shadow-lg shadow-slate-500
                bg-gradient-to-br from-slate-800 to-slate-900;
        }




        #project-images {
            @apply grid gap-4 mt-12
            md:grid-cols-3 md:grid-rows-1 md:h-64
            grid-cols-1    grid-rows-3;
        }

        #project-images * {
            @apply h-full w-full object-cover;
        }




        #project-goals > div:nth-child(1) {
            @apply flex flex-col items-center mt-12;
        }

        #project-goals > div:nth-child(1) div {
            @apply w-full h-0.5 md:bg-asumaroon bg-transparent;
        }

        #project-goals h2 {
            @apply text-3xl font-bold mb-5 -mt-6 bg-white px-4;
        }

        #project-goals div ul {
            @apply flex flex-col gap-2 md:ml-8 my-2 font-semibold mb-12 text-asumaroon-950 w-full
                md:text-xl text-lg;
        }

        #project-goals div ul li {
            @apply px-4 py-1 rounded-md cursor-default
                md:transition-transform md:hover:translate-x-4 md:duration-200
                md:bg-gradient-to-r md:from-asumaroon-200 md:to-stone-100 md:w-[80%]
                bg-zinc-100 w-full;
        }

        #project-goals > div:nth-child(2) {
            @apply flex flex-row w-full relative
        }

        #project-goals > div:nth-child(2) > *:nth-child(2) {
            @apply absolute h-full w-40 p-4 right-4 rounded-2xl text-zinc-300 bg-zinc-100 hidden xl:block
        }




        #project-team > div:nth-of-type(1) {
            @apply flex flex-col items-center mt-16;
        }

        #project-team > div:nth-of-type(1) div {
            @apply w-full h-0.5 md:bg-asumaroon bg-transparent;
        }

        #project-team > div:nth-of-type(1) h2 {
            @apply text-3xl font-bold mb-5 md:-mt-6 bg-white px-4;
        }

        #project-team > div:nth-of-type(2) {
            @apply flex w-full bg-zinc-100 p-4 rounded-t-xl mt-4
                md:flex-row flex-col items-center md:items-start;
        }

        #project-team > div:nth-of-type(2) img {
            @apply w-[240px] h-[240px] object-cover;
        }

        #project-team > div:nth-of-type(2) div {
            @apply flex flex-col w-full h-full
                md:items-start md:mt-0 md:gap-0
                    items-center   mt-2    gap-2;
        }

        #project-team > div:nth-of-type(2) div h2 {
            @apply bg-transparent text-2xl font-normal ml-4;
        }

        #project-team > div:nth-of-type(2) div p {
            @apply text-lg font-light ml-4;
        }

        #project-team > div:nth-of-type(3) {
            @apply grid text-center text-lg font-semibold py-8 mb-12 gap-2 px-2
                bg-zinc-100 rounded-b-xl border-t-4 border-white
                md:grid-cols-3
                    grid-cols-2;
        }

        #project-team > div:nth-of-type(3) div {
            @apply flex justify-center w-full;
        }

        #project-team > div:nth-of-type(3) div * {
            @apply hover:rounded-xl w-64
                md:hover:bg-white md:bg-transparent
                bg-white rounded-xl;
        }

        #project-team > div:nth-of-type(3) div a {
            @apply text-asumaroon underline
        }

        #project-team > div:nth-of-type(3) div p {
            @apply cursor-default;
        }

        #project-team > div:nth-of-type(3) h3 {
            @apply md:col-span-3 col-span-2 text-center;
        }



        #info-link {
            @apply text-asumaroon hover:underline visited:text-asumaroon;
        }
    
    `

}

export default styles