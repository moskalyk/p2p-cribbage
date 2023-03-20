import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sequence } from '0xsequence'

import 'animate.css';

import { SketchPicker } from 'react-color'
import { CodeMirror, useHighlighting, useKeydown, useStrudel, flash } from '@strudel.cycles/react';

import { getAudioContext, initAudioOnFirstClick, panic, webaudioOutput } from '@strudel.cycles/webaudio';

function Table (props: any) {

  const [cards, setCards] = React.useState<any>([])

  React.useState(() => {
    setInterval(() => {
      const card = <>
      <section>
        <aside>
          <span>A</span>
          <span>♣</span>
        </aside>
        <p className="card">♣</p>
        <aside>
          <span>A</span>
          <span>♣</span>
        </aside>
      </section>
      &nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;</>
      // setCards((prev: any) => [...prev, card])
    },1000)
  })

  return(
  <>
    <main className='hand'>
      {cards}
        <section>
          <aside>
            <span>A</span>
            <span>♣</span>
          </aside>
          <p className="card">♣</p>
          <aside>
            <span>A</span>
            <span>♣</span>
          </aside>
        </section>
        &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <section>
          <aside>
            <span>♠</span>
          </aside>
          <p className="card">♠</p>
          <aside>
            <span>🜁</span>
          </aside>
        </section>
        &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <section>
          <aside>
            <span>🜂</span>
          </aside>
          <p className="card">♦</p>
          <aside>
            <span>🜁</span>
          </aside>
        </section>
        &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <section>
          <aside>
            <span>🜂</span>
          </aside>
          <p className="card">♥</p>
          <aside>
            <span>🜁</span>
          </aside>
        </section>
      </main>
      <div className='board'>
        <svg style={{left: '20px'}} width="40%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 510"><defs><pattern id="a" patternUnits="userSpaceOnUse" patternTransform="scale(.15)" width="600" height="600"><path d="M0 295.626V-9.04h600.013v609.33H0V295.627z" fill="#e3c29e"/><path d="M7.986 587.676C9.953 440.64 23.03 293.53 12.43 146.542 10.464 94.695 8.55 43.067 8.07-8.814c13.855 41.526 4.83 85.766 9.438 128.543.71 113.11 10.505 226.5-.916 339.368-2.744 43.713-4.502 87.504-4.485 131.315-3.124 10.688-6.1 2.327-4.12-2.73zm41.163-29.93c-3.727-149.596-10.562-299.5.408-448.942.107-39.28-1.64-78.635 1.448-117.844.47 137.91 3.84 260.227-3.307 391.02 7.78 78.51.35 121.2 9.782 185.18 1.398 26.442-14.67 23.194-8.314-.69l.064-4.366zm12.3 38.677c-5.54-210.92-4.63-396.446-.216-590.527 17.33-4.687 1.266 39.342 6.168 52.556-14.777 186.12 6.688 360.303 2.068 533.01-1.1 3.1-4.363 6.596-8.02 4.965zm14.114-8.033c5.398-46.878 2.69-94.066-2.507-140.777-7.272-106.43-7.8-213.23-2.168-319.744 1.717-40.712-.03-82.786 6.513-122.534 6.174 22.296-1.153 49.796-.988 74.176-1.816 29.534-3.224 59.163-1.81 88.75C80.876 112.147 76.71 55.238 85.763-.615c-1.765 79.996-10.137 159.747-9.882 239.84-1.57 87.738 4.803 175.386 14.766 262.453 1.5 26.045.575 71.64-2.916 85.498-2.303-41.796 4.1-83.937-4.138-125.377-15.56-434.337-14.145-197.33.4 74.668-.505 12.97 3.257 53.624-8.428 51.918zm-6.886-290.063c-3.623 2.16 3.806 2.52 0 0zm39.716 298.94c5.186-92.553 3.253-185.333 7.52-277.935-26.827-71.453-16.542-149.18-12.556-223.548 10.22-27.194-9.77-88.73 14.3-94.184 5.31 47.608-8.61 97.13 8.696 143.455 14.033 30.298 16.143 63.548 14.99 96.58-5.71 67.155 4.328 151.714 13.22 227.048 3.687 33.376 2.977 66.91 6.05 100.288 1.318 16.384-13.948 29.956-10.61 4.864-2.262-35.13 3.395-71.195-3.61-105.76-24.167-2.653-12.787 43.54-19.136 61.756-4.413 22.443-.85 52.81-14.158 69.82l-2.682-.84-2.02-1.534zm15.136-8.282c7.71-21.377.64-79.6 19.85-78.794 3.868 22.174 5.312 64.062-.922 74.598-1.57-14.012 10.285-59.11-8.492-52.296-2.507 16.923.743 38.82-10.435 56.493zm37.738 3.273c8.18-91.032-5.22-181.895-14.606-272.236-3.997-51.31-3.8-102.88-1.124-154.26-1.494-19.855-39.654-48.906-3.873-49.36 11.145-27.46-1.892-58.042 1.39-86.87 9.13-45.965-9.916 40.214 11.708 27.472 1.136-14.08 7.548-66.442 4.34-26.655-14.043 128.767-20.328 259.928 2.94 388.007 4.286 46.426 4.3 93.104 7.197 139.622-9.17 8.86 1.767 27.122-7.972 34.285zm6.6 1.487c9.275-29.916.192-62.06 11.75-90.913 3.627-16.617-10.22-65.115-1.984-64.354 7.316 50.714 4.994 102.745-5.325 152.63-.544 2.333-2.657 2.133-4.443 2.633zm11.83 3.273c8.995-31.064 5.223-64.097 13.32-94.735-5.736-105.092-29.24-210.232-27.294-308.617 3.767-35.077-10.107-71.63 4.98-105.47 3.453-26.703-5.31-60.3 6.294-81.478 17.79-29.818 4.57 27.483 3.808 38.354-9.866 84.28-2.185 140.242-3.95 254.206 21.07 78.427 25.69 158.76 21.886 233.783-2.998 14.915-5.61 68.907-19.044 63.953zm44.84-7.735c6.884-98.285 9.684-197.367-1.667-295.43-3.4 25.418-22.19 22.944-19.2-1.794-10.008-53.175-20.335-108.612-5.2-161.938 7.663-35.37 19.474-70.117 21.315-106.544-4.924 9.83-17.195 55.066-9.743 21.485-4.033-13.767 18.726-62.23 16.74-25.956-2.48 11.07-11.12 54.653-2.303 47.3 3.065-23.57-.858-83.034 37.527-65.67 3.696 42.443 5.384 85.086 16.216 126.388-.376 29.003 2.473 68.63-14.872 90.45-9.657-21.047 1.278-54.27-15.24-69.476-21.898 38.58-5.053 58.56-8.41 126.507-16.954 113.392 28.16 211.766 7.087 317.507-4.6-23.65-2.06 12.477-7.573-10.326-3.693-33.053 5.446-66.63-5.432-99.16-2.26 35.467 8.87 73.06-3.802 107.484-6.682 9.21-5.604 8.283-5.444-.838zm2.35 3c-3.625 2.16 3.805 2.52 0 0zm8.238-218.217c.356-48.102-5.314-109.53-9.02-164.365-7.433 9.994-8.626 59.046-19.615 24.656-15.328-38.478 2.078-78.962 13.636-115.825 5.715-14.967-8.5-28.43-7.02-6.14-9.488 39.767-19.71 81.036-12.694 122.127-7.068 25.69 24.56 40.168 24.895 14.232 7.685 25.546 3.244 53.888 7.046 80.54 1.555 30.456 2.332 60.982 1.204 91.47 1.86-15.498.9-31.14 1.57-46.7zM212.52 266.42c-3.292-9.072 4.468 4.915 0 0zm39.23 322.564c-8.738-14.122 15.394-45.028 12.08-13.4 2.1 9.008-6.214 38.337-12.08 13.4zm15.422 9.818c3.9-42.952-9.263-84.616-16.526-126.258-7.144-88.39-12.548-177.836.15-266 7.84 6.078 5.92 58.452 17.147 34.545-1.504-23.544 26.186-26.405 17.358.417 6.56 103.905 3.533 208.113 8.21 312.092-7.558-104.137-2.627-208.84-12.358-312.854-16.697-7.964-11.106 52.592-25.852 20.26-14.78 46.24-7.883 95.678-7.756 143.358 4.033 63.54 24.325 125.877 20.418 189.833zm29.96-31.538c-4.944-78.03-6.77-240.65-5.89-361.374 8.228-70.927 12.647-142.67 6.708-213.98 14.376 9.75 2.414 66.67 6.264 25.014-1.73-20.48 4.546-21.976 2.98-.973-1.37 73.318 2.43 146.776-4.6 219.908-2.405 31.697 3.905 62.925-1.4 94.54-1.476 87.52 6.02 174.97 5.218 262.513-14.024 14.31-7.028-19.814-9.28-25.648zm7.078-9.52c-2.028-17.236.014-40.03-3.892-53.818 1.18 17.924-2.093 36.468 3.892 53.817zm15.585 39.273c-5.206-92.96-2.28-188.334-.567-302.893 6.23-82.65 13.46-165.876 2.882-248.504-3.3-13.595 1.5-69.392 4.566-31.396 2.81 46.872 4.76 93.832 5.76 140.788.206 29.376-.233 58.75-.597 88.12 14.542-32.054 4.128-68.928 7.192-102.936-3.47-41.55-4.2-83.25-8.73-124.604 10.922-33.493 13.18 20.538 13.03 32.238 10.793 199.008-15.57 369.502-5.01 549.183-25.865-114.116.372-240.52-2.147-348.247-15.573 41.612-4.474 78.61-13.466 146.037-1.334 47.683-.39 95.46 3.678 142.99-13.498 21.308 16.25 39.31-6.593 59.238zm48.266.595c-2.204-50.326-14.48-99.903-11.507-150.512-3.015-145.537 10.74-290.718 11.355-436.207 11.47-15.967 1.982 36.33 2.846 46.285-2.767 124.984-14.293 278.46-9.198 418.5-3.827 34.576 16.542 57.323 12.53 91.385-.912 10.007 8.67 26.65-6.025 30.556zm12.206-2.975c6.204-52.66-5.816-104.748-14.252-156.284-6.79-69.342-1.367-139.016.245-208.47 7.234 38.94-.12 78.83 2.463 118.197-.146 46.256 8.198 91.847 15.393 137.242 2.788 36.784 2.572 73.866-1.724 110.523l-1.403.14zm9.24 3.844c3.402-74.943 2.116-150.666-13.112-224.26-5.938-108.122-4.28-216.838 9.03-324.363-.838-13.442-2.938-58.364 16.88-45.12-1.463 52.487-12.868 103.974-18.184 156.034-4.816 179.55-2.755 173.362 10.858 227.87 2.934 42.95 6.88 86.352 6.927 129.184-1.74 27.302 9.105 63.57-11.37 79.634l-.366 1-.664.038zm18.738-82.092c1.854-145.81-19.02-292.098.077-437.433.013-19.564-1.49-71.53 4.68-70.335-5.395 132.506-12.44 265.32-2.887 397.803 2.156 64.146 3.79 128.328 3.013 192.522-12.97-26.017-.385-55.225-4.882-82.564zm43.674 78.25c-.1-43.47 2.597-86.92 7.372-130.103 34.192 14.127 4.61 58.41 11.15 85.98-.538 12.863 5.768 53.65-18.522 44.127zm26.616 0c2.632-15.144 5.976-65.556 5.94-25.363-.182 8.723-1.41 17.768-5.94 25.362zm36.976-3.57c-2.19-152.917 24.418-305.976 4.787-458.618-7.546-45.736-6.314-92.012-4.535-138.16 12.79 55.322 1.318 115.193 10.668 131.233 9.533 122.58 3.075 245.59 1.33 368.324-6.408 32.282-2.718 75.503-11.455 101.67zm8.768-5.952c4.824-39.77 17.253-79.046 9.427-119.343-2.122-96.602.02-193.225.405-289.825 1.636 131.815 1.6 264.012 2.794 395.613.188 8.52-15.523 39.277-12.626 13.566zm9.64-149.93c-3.624 2.163 3.805 2.52 0 0zm19.462 137.47c6.263-9.414-6.172-30.367-4.647-7.898 4.744-80.787 13.227-162.378-.513-242.745-3.647-70.416 3.016-140.896 1.655-211.42 2.68-37.818-4.824-78.686 5.816-114.644 28.487-21.077 55.64 15.562 39.47 41.717 6.277 169.34 4.374 338.834 2.912 508.256 4.704 23.962-7.92 56.833-33.87 53.012-9.978-4.204-14.01-16.472-10.82-26.286zm28.29-307.974c3.488-75.95 1.066-152.083-5.084-227.833-14.64 29.242-2.83 64.47-8.268 96.034.395 47.038 4.726 93.974 11.447 140.49 1.15-2.808 1.726-5.666 1.905-8.697zm-5.02-11.207c-1.525-7 2.673 2.206 0 0zm20.538-114.62c-3.624 2.16 3.806 2.52 0 0zm0-4.76c-3.624 2.16 3.806 2.518 0 0zM375.078 592.65c-1.526-7 2.672 2.207 0 0zm-124.585-19.456c-6.093-13.08 6-.374 0 0zm182.735-18.35c-15.267 3.403 6.556-24.967-10.638-14.594-2.613-116.918-9.13-233.843-7.6-350.806 1.268-30.512 5.065-61.325 4.352-91.588 18.303-22.645 11.834 27.738 16.102 40.617 1.603 30.065 6.338 59.642 12.893 88.88 16.555 67.986 22.5-69.292 26.78-92.49 5.705-23.645-1.568-57.83 15.62-74.79 9.438 25.698 7.55 54.902 13.13 81.904 11.328 90.662 15.194 184.132-2.71 273.878-16.725-33.9-16.97-75.454-27.336-112.302 7.293 23.966-12.316-20.744-12.604 9.46-6.575 48.193-12.737 96.492-19.323 144.717-4.13 32.21-5.268 65.148-7.48 97.214l-1.184-.105zm-5.955-102.99c-3.624 2.162 3.806 2.52 0 0zm15.194-162.9c-5.716-38.127-9.094-76.61-16.207-114.516-11.888 38.775-5.32 80.356-5.264 120.307 1.672 34.456.438 69.17 5.76 103.355 24.477 15.866 16.422-99.162 15.71-109.15zm59.175 59.686c12.017-79.12 4.657-159.818-9.53-238.115-23.698 33.266-10.378 76.037-16.61 113.67 2.185 42.43 7.076 85.98 26.14 124.438zM178.104 553.956c-1.832-9.12 4.228 3.547 0 0zm225.73-16.435c1.507-15.96 2.135 8.175 0 0zM507.8 509.246c-2.935-17.104 5.05-22.49 2.547-.86.417 14.95-4.532 25.398-2.547.86zm-23.964 19.42c-5.538-14.522 2.698-47.063 1.413-12.934.055 4.34-.04 8.773-1.414 12.935zm-345.58-8.628c-1.475-7.236 3.737 3.4 0 0zm188.897-6.022c-.133-9.126 1.645 4.972 0 0zm.09-8.925c.887-9.672.887 9.67 0 0zm-170.147-1.687c-1.527-7 2.672 2.206 0 0zm170.1-7.83c.645-8.2.645 8.2 0 0zm-319.88-41.06c11.013-141.93-1.39-122.032 1.9-4.438-.364 10.485-2.435 25.635-1.9 4.44zm264.052 9.37c.195-22.456-14.234-80.45.583-82.156 6.316 26.682 11.734 53.522-.582 82.157zM51.12 443.51c-3.197-28.806 4.55-12.903.928 6.46zm4.706-28.464c-8.006-4.89 2.667-7.933 0 0zm110.55-18.113c-9.372-60.938-9.097-122.95-10.633-184.478-1-64.678-5.646-79.53 11.228-205.375 7.303 15.068-8.5 61.198-6.66 87.566-2.862 64.828-1.587 129.84-.527 194.677 16.294 32.026-23.296 87.65 6.592 107.598zM48.012 317.458c-32.032 188.393-16.016 94.195 0 0zm173.898-17.554c-8.298-6.59 3.212-8.638 0 0zM330.53 264.2c-1.528-7 2.67 2.205 0 0zm1.17-17.852c-1.526-7 2.673 2.206 0 0zm-55.08-5.95c-1.525-7 2.674 2.205 0 0zm235.46-16.828c4.462-4.286-.884 8.23 0 0zm-144.59-38.607c1.2-61.414 3.75-122.96 12.42-183.81 9.485 33.094-8.207 65.896-6.51 99.333-2.2 34.194-1.274 68.625-6.002 102.627-.443-6.047.132-12.1.093-18.15zm231.392-10.017c-1.526-7 2.672 2.206 0 0zm-66.126-1.59c-1.932-46.13-11.25-71.252-8.976-170.1 15.74 4.483 3.26 47.272 7.82 66.12 1.082 34.632 5.082 69.39 1.156 103.986zm-2.4-111.84c-3.625 2.16 3.805 2.518 0 0zM599.12 164.74c.886-9.67.886 9.672 0 0zM251.3 153.91c-3.813-15.56 4.574 5.85 0 0zm34.606-2.154c-6.34-48.122-12.105-96.324-17.613-144.55 13.29 23.076 6.604 54.876 11.343 81.318-1.206 16.03 15.687 34.434 16.165 7.258 3.906-23.246-4.29-70.856.12-79.42 1.855 44.7 5.103 90.37-6.157 134.16 2.934-11.572-1.384 1.18-3.858 1.235zm113.285-.903c.804-25.252 4.43-80.606 7.233-86.42-.653 28.927-3.573 57.745-7.233 86.42zm-211.423-6.688c.744-14.663 11.82-47.865 6.157-13.735-.746 5-2.346 10.21-6.157 13.735zm409.86-16.91c1.5-10.118 1.793 11.578 0 0zm-310.39-12.39c-3.417-5.615 6.51 2.283 0 0zm310.683-12.603c.335-11.135 1.163 7.277 0 0zM128.87 94.584c-7.465-49.037 3.938-126.936 8.555-38.73-1.558 12.928-1.945 27.202-8.555 38.73zM455.338 78.79c1.02-22.415-17.11-78.677 10.23-76.21 7.067 25.988-8.39 50.692-10.23 76.21zm39.252-.23c-1.526-7 2.672 2.205 0 0zm-226.68-6.05c2.37-5.185.925 8.63 0 0zM137.17 55.945c-1.526-7 2.672 2.206 0 0zm247.27-30.943c-1.525-7 2.673 2.206 0 0z" fill="#eed8c5"/></pattern></defs><rect x="1" y="1" width="148" height="508" stroke="#8c5829" rx="10" ry="10" fill="url(#a)"/><path d="M10.5 459.5v-385a64 64 0 11128 0v385a-40-40 0 11-80 0v-400l16-8v408a24 24 0 1048 0v-385a-48-48 0 10-96 0v385z" stroke="#000" fill="#00bfff"/><path d="M26.5 459.5v-385a48 48 0 1196 0v385a-24-24 0 11-48 0v-408l16 8v400a8 8 0 1016 0v-385a-32-32 0 10-64 0v385z" stroke="#000" fill="#ea4335"/><path d="M10.5 459.5h32m16 0h32m16 0h32m-128-55h32m16 0h32m16 0h32m-128-55h32m16 0h32m16 0h32m-128-55h32m16 0h32m16 0h32m-128-55h32m16 0h32m16 0h32m-128-55h32m16 0h32m16 0h32m-128-55h32m16 0h32m16 0h32m-128-55h32m16 0h32m16 0h32m-64-32v-32" stroke="#000" fill="none"/><path d="M58.5 404.5h32" stroke="#000" stroke-width="4" fill="none"/><path d="M61.5 404.5h26" stroke="#fff" fill="none"/><path d="M106.5 239.5h32" stroke="#000" stroke-width="4" fill="none"/><path d="M109.5 239.5h10m6 0h10" stroke="#fff" fill="none"/><circle cx="18.5" cy="452" r="2.5"/><circle cx="18.5" cy="442" r="2.5"/><circle cx="18.5" cy="432" r="2.5"/><circle cx="18.5" cy="422" r="2.5"/><circle cx="18.5" cy="412" r="2.5"/><circle cx="18.5" cy="397" r="2.5"/><circle cx="18.5" cy="387" r="2.5"/><circle cx="18.5" cy="377" r="2.5"/><circle cx="18.5" cy="367" r="2.5"/><circle cx="18.5" cy="357" r="2.5"/><circle cx="18.5" cy="342" r="2.5"/><circle cx="18.5" cy="332" r="2.5"/><circle cx="18.5" cy="322" r="2.5"/><circle cx="18.5" cy="312" r="2.5"/><circle cx="18.5" cy="302" r="2.5"/><circle cx="18.5" cy="287" r="2.5"/><circle cx="18.5" cy="277" r="2.5"/><circle cx="18.5" cy="267" r="2.5"/><circle cx="18.5" cy="257" r="2.5"/><circle cx="18.5" cy="247" r="2.5"/><circle cx="18.5" cy="232" r="2.5"/><circle cx="18.5" cy="222" r="2.5"/><circle cx="18.5" cy="212" r="2.5"/><circle cx="18.5" cy="202" r="2.5"/><circle cx="18.5" cy="192" r="2.5"/><circle cx="18.5" cy="177" r="2.5"/><circle cx="18.5" cy="167" r="2.5"/><circle cx="18.5" cy="157" r="2.5"/><circle cx="18.5" cy="147" r="2.5"/><circle cx="18.5" cy="137" r="2.5"/><circle cx="18.5" cy="122" r="2.5"/><circle cx="18.5" cy="112" r="2.5"/><circle cx="18.5" cy="102" r="2.5"/><circle cx="18.5" cy="92" r="2.5"/><circle cx="18.5" cy="82" r="2.5"/><circle cx="18.5" cy="67" r="2.5"/><circle cx="24.303" cy="49.676" r="2.5"/><circle cx="34.902" cy="34.902" r="2.5"/><circle cx="49.676" cy="24.303" r="2.5"/><circle cx="67" cy="18.5" r="2.5"/><circle cx="82" cy="18.5" r="2.5"/><circle cx="99.324" cy="24.303" r="2.5"/><circle cx="114.098" cy="34.902" r="2.5"/><circle cx="124.697" cy="49.676" r="2.5"/><circle cx="130.5" cy="67" r="2.5"/><circle cx="130.5" cy="82" r="2.5"/><circle cx="130.5" cy="92" r="2.5"/><circle cx="130.5" cy="102" r="2.5"/><circle cx="130.5" cy="112" r="2.5"/><circle cx="130.5" cy="122" r="2.5"/><circle cx="130.5" cy="137" r="2.5"/><circle cx="130.5" cy="147" r="2.5"/><circle cx="130.5" cy="157" r="2.5"/><circle cx="130.5" cy="167" r="2.5"/><circle cx="130.5" cy="177" r="2.5"/><circle cx="130.5" cy="192" r="2.5"/><circle cx="130.5" cy="202" r="2.5"/><circle cx="130.5" cy="212" r="2.5"/><circle cx="130.5" cy="222" r="2.5"/><circle cx="130.5" cy="232" r="2.5"/><circle cx="130.5" cy="247" r="2.5"/><circle cx="130.5" cy="257" r="2.5"/><circle cx="130.5" cy="267" r="2.5"/><circle cx="130.5" cy="277" r="2.5"/><circle cx="130.5" cy="287" r="2.5"/><circle cx="130.5" cy="302" r="2.5"/><circle cx="130.5" cy="312" r="2.5"/><circle cx="130.5" cy="322" r="2.5"/><circle cx="130.5" cy="332" r="2.5"/><circle cx="130.5" cy="342" r="2.5"/><circle cx="130.5" cy="357" r="2.5"/><circle cx="130.5" cy="367" r="2.5"/><circle cx="130.5" cy="377" r="2.5"/><circle cx="130.5" cy="387" r="2.5"/><circle cx="130.5" cy="397" r="2.5"/><circle cx="130.5" cy="412" r="2.5"/><circle cx="130.5" cy="422" r="2.5"/><circle cx="130.5" cy="432" r="2.5"/><circle cx="130.5" cy="442" r="2.5"/><circle cx="130.5" cy="452" r="2.5"/><circle cx="130.5" cy="467" r="2.5"/><circle cx="118.379" cy="484.577" r="2.5"/><circle cx="98.5" cy="491.5" r="2.5"/><circle cx="78.621" cy="484.577" r="2.5"/><circle cx="66.5" cy="467" r="2.5"/><circle cx="66.5" cy="452" r="2.5"/><circle cx="66.5" cy="442" r="2.5"/><circle cx="66.5" cy="432" r="2.5"/><circle cx="66.5" cy="422" r="2.5"/><circle cx="66.5" cy="412" r="2.5"/><circle cx="66.5" cy="397" r="2.5"/><circle cx="66.5" cy="387" r="2.5"/><circle cx="66.5" cy="377" r="2.5"/><circle cx="66.5" cy="367" r="2.5"/><circle cx="66.5" cy="357" r="2.5"/><circle cx="66.5" cy="342" r="2.5"/><circle cx="66.5" cy="332" r="2.5"/><circle cx="66.5" cy="322" r="2.5"/><circle cx="66.5" cy="312" r="2.5"/><circle cx="66.5" cy="302" r="2.5"/><circle cx="66.5" cy="287" r="2.5"/><circle cx="66.5" cy="277" r="2.5"/><circle cx="66.5" cy="267" r="2.5"/><circle cx="66.5" cy="257" r="2.5"/><circle cx="66.5" cy="247" r="2.5"/><circle cx="66.5" cy="232" r="2.5"/><circle cx="66.5" cy="222" r="2.5"/><circle cx="66.5" cy="212" r="2.5"/><circle cx="66.5" cy="202" r="2.5"/><circle cx="66.5" cy="192" r="2.5"/><circle cx="66.5" cy="177" r="2.5"/><circle cx="66.5" cy="167" r="2.5"/><circle cx="66.5" cy="157" r="2.5"/><circle cx="66.5" cy="147" r="2.5"/><circle cx="66.5" cy="137" r="2.5"/><circle cx="66.5" cy="122" r="2.5"/><circle cx="66.5" cy="112" r="2.5"/><circle cx="66.5" cy="102" r="2.5"/><circle cx="66.5" cy="92" r="2.5"/><circle cx="66.5" cy="82" r="2.5"/><circle cx="66.5" cy="67" r="2.5"/><circle cx="34.5" cy="452" r="2.5"/><circle cx="34.5" cy="442" r="2.5"/><circle cx="34.5" cy="432" r="2.5"/><circle cx="34.5" cy="422" r="2.5"/><circle cx="34.5" cy="412" r="2.5"/><circle cx="34.5" cy="397" r="2.5"/><circle cx="34.5" cy="387" r="2.5"/><circle cx="34.5" cy="377" r="2.5"/><circle cx="34.5" cy="367" r="2.5"/><circle cx="34.5" cy="357" r="2.5"/><circle cx="34.5" cy="342" r="2.5"/><circle cx="34.5" cy="332" r="2.5"/><circle cx="34.5" cy="322" r="2.5"/><circle cx="34.5" cy="312" r="2.5"/><circle cx="34.5" cy="302" r="2.5"/><circle cx="34.5" cy="287" r="2.5"/><circle cx="34.5" cy="277" r="2.5"/><circle cx="34.5" cy="267" r="2.5"/><circle cx="34.5" cy="257" r="2.5"/><circle cx="34.5" cy="247" r="2.5"/><circle cx="34.5" cy="232" r="2.5"/><circle cx="34.5" cy="222" r="2.5"/><circle cx="34.5" cy="212" r="2.5"/><circle cx="34.5" cy="202" r="2.5"/><circle cx="34.5" cy="192" r="2.5"/><circle cx="34.5" cy="177" r="2.5"/><circle cx="34.5" cy="167" r="2.5"/><circle cx="34.5" cy="157" r="2.5"/><circle cx="34.5" cy="147" r="2.5"/><circle cx="34.5" cy="137" r="2.5"/><circle cx="34.5" cy="122" r="2.5"/><circle cx="34.5" cy="112" r="2.5"/><circle cx="34.5" cy="102" r="2.5"/><circle cx="34.5" cy="92" r="2.5"/><circle cx="34.5" cy="82" r="2.5"/><circle cx="34.5" cy="67" r="2.5"/><circle cx="39.12" cy="55.838" r="2.5"/><circle cx="46.216" cy="46.216" r="2.5"/><circle cx="55.838" cy="39.12" r="2.5"/><circle cx="67" cy="34.5" r="2.5"/><circle cx="82" cy="34.5" r="2.5"/><circle cx="93.162" cy="39.12" r="2.5"/><circle cx="102.784" cy="46.216" r="2.5"/><circle cx="109.88" cy="55.838" r="2.5"/><circle cx="114.5" cy="67" r="2.5"/><circle cx="114.5" cy="82" r="2.5"/><circle cx="114.5" cy="92" r="2.5"/><circle cx="114.5" cy="102" r="2.5"/><circle cx="114.5" cy="112" r="2.5"/><circle cx="114.5" cy="122" r="2.5"/><circle cx="114.5" cy="137" r="2.5"/><circle cx="114.5" cy="147" r="2.5"/><circle cx="114.5" cy="157" r="2.5"/><circle cx="114.5" cy="167" r="2.5"/><circle cx="114.5" cy="177" r="2.5"/><circle cx="114.5" cy="192" r="2.5"/><circle cx="114.5" cy="202" r="2.5"/><circle cx="114.5" cy="212" r="2.5"/><circle cx="114.5" cy="222" r="2.5"/><circle cx="114.5" cy="232" r="2.5"/><circle cx="114.5" cy="247" r="2.5"/><circle cx="114.5" cy="257" r="2.5"/><circle cx="114.5" cy="267" r="2.5"/><circle cx="114.5" cy="277" r="2.5"/><circle cx="114.5" cy="287" r="2.5"/><circle cx="114.5" cy="302" r="2.5"/><circle cx="114.5" cy="312" r="2.5"/><circle cx="114.5" cy="322" r="2.5"/><circle cx="114.5" cy="332" r="2.5"/><circle cx="114.5" cy="342" r="2.5"/><circle cx="114.5" cy="357" r="2.5"/><circle cx="114.5" cy="367" r="2.5"/><circle cx="114.5" cy="377" r="2.5"/><circle cx="114.5" cy="387" r="2.5"/><circle cx="114.5" cy="397" r="2.5"/><circle cx="114.5" cy="412" r="2.5"/><circle cx="114.5" cy="422" r="2.5"/><circle cx="114.5" cy="432" r="2.5"/><circle cx="114.5" cy="442" r="2.5"/><circle cx="114.5" cy="452" r="2.5"/><circle cx="114.5" cy="467" r="2.5"/><circle cx="107.083" cy="473.003" r="2.5"/><circle cx="98.5" cy="475.5" r="2.5"/><circle cx="89.917" cy="473.003" r="2.5"/><circle cx="82.5" cy="467" r="2.5"/><circle cx="82.5" cy="452" r="2.5"/><circle cx="82.5" cy="442" r="2.5"/><circle cx="82.5" cy="432" r="2.5"/><circle cx="82.5" cy="422" r="2.5"/><circle cx="82.5" cy="412" r="2.5"/><circle cx="82.5" cy="397" r="2.5"/><circle cx="82.5" cy="387" r="2.5"/><circle cx="82.5" cy="377" r="2.5"/><circle cx="82.5" cy="367" r="2.5"/><circle cx="82.5" cy="357" r="2.5"/><circle cx="82.5" cy="342" r="2.5"/><circle cx="82.5" cy="332" r="2.5"/><circle cx="82.5" cy="322" r="2.5"/><circle cx="82.5" cy="312" r="2.5"/><circle cx="82.5" cy="302" r="2.5"/><circle cx="82.5" cy="287" r="2.5"/><circle cx="82.5" cy="277" r="2.5"/><circle cx="82.5" cy="267" r="2.5"/><circle cx="82.5" cy="257" r="2.5"/><circle cx="82.5" cy="247" r="2.5"/><circle cx="82.5" cy="232" r="2.5"/><circle cx="82.5" cy="222" r="2.5"/><circle cx="82.5" cy="212" r="2.5"/><circle cx="82.5" cy="202" r="2.5"/><circle cx="82.5" cy="192" r="2.5"/><circle cx="82.5" cy="177" r="2.5"/><circle cx="82.5" cy="167" r="2.5"/><circle cx="82.5" cy="157" r="2.5"/><circle cx="82.5" cy="147" r="2.5"/><circle cx="82.5" cy="137" r="2.5"/><circle cx="82.5" cy="122" r="2.5"/><circle cx="82.5" cy="112" r="2.5"/><circle cx="82.5" cy="102" r="2.5"/><circle cx="82.5" cy="92" r="2.5"/><circle cx="82.5" cy="82" r="2.5"/><circle cx="82.5" cy="67" r="2.5"/><path d="M10.5 464.5h16v25h-16z" stroke="#000" fill="#00bfff"/><circle cx="18.5" cy="472" r="2.5"/><circle cx="18.5" cy="482" r="2.5"/><path d="M26.5 464.5h16v25h-16z" stroke="#000" fill="#ea4335"/><circle cx="34.5" cy="472" r="2.5"/><circle cx="34.5" cy="482" r="2.5"/></svg>
      </div>
  </>
  )
}

function Card(props: any){
  return(
  <>
    <main>
        <section style={{border: `2px solid ${props.pathColor}`, background: `linear-gradient(to bottom, rgba(242, 61, 76, 0.2), ${props.backgroundColor} 66%)`}}>
          <aside style={{color: props.pathColor}}>
            <span>{props.denomination}</span>
            <span>{props.suit}</span>
          </aside>
          <p style={{color: props.pathColor}} className="card">♣</p>
          <aside style={{color: props.pathColor}}>
            <span>{props.denomination}</span>
            <span>{props.suit}</span>
          </aside>
        </section>
      </main>
  </>
  )
}

function GameRoom (props: any) {

  const [backgroundColor, setBackgroundColor] = React.useState<any>()
  const [pathColor, setPathColor] = React.useState<any>()

  React.useEffect(() => {
    document.getElementById('menu-1')!.style.setProperty('--animate-duration', '2s') 
    document.getElementById('menu-4')!.style.setProperty('--animate-duration', '2s') 
    setBackgroundColor(localStorage.getItem('background'))
    setPathColor(localStorage.getItem('path'))
  })
  return(
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p onClick={() => props.setAppState(4)} id='menu-1' className='menu-option-1 animate__animated animate__slideInDown'>find a game</p>
      <p onClick={() => props.setAppState(2)} className='menu-option-2 animate__animated animate__slideInDown'>choose color</p>
      <br/>
      <br/>
      <br/>
      <Card suit={'♣'} denomination={'A'} pathColor={pathColor} backgroundColor={backgroundColor} />
      <br/>
      <br/>
      <br/>
      <p onClick={() => props.setAppState(3)} className='menu-option-3 animate__animated animate__slideInUp'>set sound</p>
      <p onClick={() => props.setAppState(5)} id='menu-4' className='menu-option-4 animate__animated animate__slideInUp'>leaderboard</p>
    </>
  )
}

function Home (props: any) {

  const [backgroundColor, setBackgroundColor] = React.useState<any>()
  const [pathColor, setPathColor] = React.useState<any>()

  const play = () => {
    console.log('play')
    props.setAppState(1)
  }
  React.useEffect(() => {
    setBackgroundColor(localStorage.getItem('background'))
    setPathColor(localStorage.getItem('path'))
  })
  const login = async () => {

      const wallet = sequence.getWallet()
    
      const connectWallet = await wallet.connect({
        networkId: 80001,
        app: 'cribbage',
        authorize: true,
        settings: {
          theme: 'dark'
        }
      })
      console.log(connectWallet.connected)
      // loggedIn = connectWallet.connected // grr
      if(connectWallet.connected) props.setAppState(1)
  }
  return(
    <>  
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p className='title'>p2p Cribbage</p>
      <br/>
      <br/>

      <div style={{cursor: 'pointer'}} onClick={() => login()}>
        <Card  suit={'♣'} denomination={'A'} pathColor={pathColor} backgroundColor={backgroundColor} />
      </div>

      <br/>
      <br/>

      <img style={{opacity: '20%'}} width={'200px'} src='https://svgsilh.com/svg/947893.svg' />
    </>
  )
}

function Color(props: any) {
  const [backgroundColor, setBackgroundColor] = React.useState<any>()
  const [pathColor, setPathColor] = React.useState<any>()


  const handleChangeComplete = (color: any) => {
    console.log(color.hex)
    localStorage.setItem('background', color.hex)
    setBackgroundColor(localStorage.getItem('background')!)
    // document.getElementById('color')!.style.background = `linear-gradient( to top, pink 0%, pink 50%, ${color.hex} 50%, ${color.hex} 100%)`
  }

  const handleChangeCompletePath = (color: any) => {
    localStorage.setItem('path', color.hex)

    setPathColor(color.hex)
    setPathColor(localStorage.getItem('path')!)

  }

  return (
  <>
  <div>
    <SketchPicker 
      color={ backgroundColor }
      onChangeComplete={ handleChangeComplete }
    />
    <br/>
    <main style={{position: 'absolute', left: '46.5%', top: '47%'}} className='home-card'>
        <section style={{border: `2px solid ${pathColor}`, background: `linear-gradient(to bottom, rgba(242, 61, 76, 0.2), ${backgroundColor} 66%)`}}>
          <aside style={{color: pathColor}}>
            <span>A</span>
            <span>♣</span>
          </aside>
          <p style={{color: pathColor}} className="card">♣</p>
          <aside style={{color: pathColor}}>
            <span>A</span>
            <span>♣</span>
          </aside>
        </section>
      </main>

    <SketchPicker 
      color={ pathColor }
      onChangeComplete={ handleChangeCompletePath }
    />
    <p className='return animate__animated animate__slideInUp' onClick={() => props.setAppState(1)}>return</p>
  </div>
  </>
  )
}

const ctx = getAudioContext();
const getTime = () => ctx.currentTime;

const defaultTune = `samples({
  bd: ['bd/BT0AADA.wav','bd/BT0AAD0.wav','bd/BT0A0DA.wav','bd/BT0A0D3.wav','bd/BT0A0D0.wav','bd/BT0A0A7.wav'],
  sd: ['sd/rytm-01-classic.wav','sd/rytm-00-hard.wav'],
  hh: ['hh27/000_hh27closedhh.wav','hh/000_hh3closedhh.wav'],
}, 'github:tidalcycles/Dirt-Samples/master/');
stack(
  s("bd,[~ <sd!3 sd(3,4,2)>],hh*8") // drums
  .speed(perlin.range(.7,.9)) // random sample speed variation
  //.hush()
  ,"<a1 b1*2 a1(3,8) e2>" // bassline
  .off(1/8,x=>x.add(12).degradeBy(.5)) // random octave jumps
  .add(perlin.range(0,.5)) // random pitch variation
  .superimpose(add(.05)) // add second, slightly detuned voice
  .n() // wrap in "n"
  .decay(.15).sustain(0) // make each note of equal length
)
.fast(2/3)`;

const Sound = (props: any) => {
  const [code, setCode] = React.useState(defaultTune);
  const [view, setView] = React.useState();

  const { scheduler, evaluate, schedulerError, evalError, isDirty, activeCode, pattern, started } = useStrudel({
    code,
    defaultOutput: webaudioOutput,
    getTime,
  });

  useHighlighting({
    view,
    pattern,
    active: started && !activeCode?.includes('strudel disable-highlighting'),
    getTime: () => scheduler.now(),
  });

  const save = () => {
    console.log('saving')
  }

  return(
  <>
    <div className='code'>
      <CodeMirror value={code} onChange={setCode} onViewChanged={setView} />
    </div>
    <div className='footer-record'>
      <input type="checkbox" id="switch" onClick={async () => {
        await evaluate(code);
        scheduler.start();
      }}/><label htmlFor="switch">play</label>
      <p className='return animate__animated animate__slideInUp' onClick={() => save()}>save</p>
      <p className='return animate__animated animate__slideInUp' onClick={() => props.setAppState(1)}>return</p>
    </div>
  </>
  )
}

// function Sound() {
//   return(
//   <>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     record
//   </>
//   )
// }

function WaitingRoom(props: any){
  React.useEffect(() => {
    setTimeout(() => {
      props.setAppState(6)
    }, 400*10)
  })
  return(
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p className='title'>waiting...</p>
      <p className='return-bottom animate__animated animate__slideInUp' onClick={() => props.setAppState(1)}>return</p>
    </>
  )
}

function LeaderBoard(props: any){
  return(
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p className='title'>leaderboard</p>
      <p className='return-bottom animate__animated animate__slideInUp' onClick={() => props.setAppState(1)}>return</p>
    </>
  )
}

function App() {

  const [appState, setAppState] = React.useState(0)

  sequence.initWallet('mumbai')

  const Compass = (appState: number) => {
    let navigator;
    console.log('app', appState)
    switch(appState){
      case 0:
        navigator = <Home setAppState={setAppState}/>
        break;
      case 1:
        navigator = <GameRoom setAppState={setAppState}/>
        break;
      case 2:
        navigator = <Color setAppState={setAppState}/>
        break;
      case 3: 
        navigator = <Sound setAppState={setAppState}/>
        break;
      case 4:
        navigator = <WaitingRoom setAppState={setAppState}/>
        break;
      case 5:
        navigator = <LeaderBoard setAppState={setAppState}/>
        break;
      case 6:
        navigator = <Table setAppState={setAppState}/>
        break;
    }
    return navigator
  }

  return (
    <div className="App">
      {Compass(appState)}
    </div>
  );
}

export default App;