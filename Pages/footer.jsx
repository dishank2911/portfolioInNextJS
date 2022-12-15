import React, {memo} from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#292727]">
    <div className="container mx-auto text-white flex flex-col justify-center items-center py-20">
      <h6 className="text-3xl font-semibold text-center">OK, LET’S CREATE SOMETHING MESMERIZING</h6>
      <div className="text-2xl font-bold pt-6">Dishank<span className="hero-gradient-heading">.</span></div>
      <ul className="flex gap-2 py-6">
                    <li className="hover:bg-white rounded-full p-1"><a aria-label='github' href="https://github.com/dishank2911" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="35px" height="35px"><linearGradient id="KpzH_ttTMIjq8dhx1zD2pa" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"/><stop offset="1" stopColor="#e6abff"/></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"/><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"/></svg></a></li>
                    <li className="hover:bg-white rounded-full p-1"><a aria-label='linkedin' href="https://www.linkedin.com/in/dishank-patel29" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="35px" height="35px"><linearGradient id="mM51xuUryDpy5zRPCJ4TLa" x1="32" x2="32" y1="6" y2="58" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff" /><stop offset="1" stopColor="#c822ff" /></linearGradient><path fill="url(#mM51xuUryDpy5zRPCJ4TLa)" d="M32,58C17.664,58,6,46.337,6,32C6,17.664,17.664,6,32,6s26,11.664,26,26 C58,46.337,46.336,58,32,58z M32,8C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z" /><linearGradient id="mM51xuUryDpy5zRPCJ4TLb" x1="21.922" x2="22.081" y1="25.872" y2="44.462" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff" /><stop offset="1" stopColor="#e6abff" /></linearGradient><rect width="6" height="18" x="19" y="26" fill="url(#mM51xuUryDpy5zRPCJ4TLb)" /><linearGradient id="mM51xuUryDpy5zRPCJ4TLc" x1="22.474" x2="22.527" y1="17.966" y2="24.145" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff" /><stop offset="1" stopColor="#e6abff" /></linearGradient><ellipse cx="22.5" cy="21" fill="url(#mM51xuUryDpy5zRPCJ4TLc)" rx="3.5" ry="3" /><g><linearGradient id="mM51xuUryDpy5zRPCJ4TLd" x1="38.077" x2="37.922" y1="25.983" y2="44.076" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff" /><stop offset="1" stopColor="#e6abff" /></linearGradient><path fill="url(#mM51xuUryDpy5zRPCJ4TLd)" d="M40,26h-0.529H39.47c-2.187,0-4,1.572-4.387,3.647H35V26h-6v18h6v-8.588v-1.529 c0.007-0.379,0.037-0.729,0.084-1.06C35.392,31.493,36.577,30.5,38,30.5c1.657,0,3,1.343,3,3v0.559v1.176V44h6v-9.118v-0.823V33 C47,29.134,43.866,26,40,26z" /></g></svg></a></li>
                    <li className="hover:bg-white rounded-full p-1"><a aria-label='gmail' href="mailto:dishank2911@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="35px" height="35px"><linearGradient id="SVGID_1_" x1="14" x2="14" y1="16.447" y2="24.493" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#8cc5fc"/><stop offset="1" stopColor="#d5a8fb"/></linearGradient><path fill="url(#SVGID_1_)" d="M18.9,17.8l-3.5-2.5c-1.6-0.7-3.5-0.5-4.8,0.7c-1,1-1.6,2.3-1.6,3.9v3.6l10,7.4V18.5L18.9,17.8L18.9,17.8z"/><linearGradient id="SVGID_2_" x1="50" x2="50" y1="16.447" y2="24.493" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#8cc5fc"/><stop offset="1" stopColor="#d5a8fb"/></linearGradient><path fill="url(#SVGID_2_)" d="M55,23.5v-3.6c0-1.5-0.6-2.8-1.6-3.8c0,0,0,0,0,0c-1.5-1.5-3.9-1.5-5.5-0.3l-2.7,2l0,0L45,18.5v12.4L55,23.5z"/><linearGradient id="SVGID_3_" x1="32" x2="32" y1="12.957" y2="49.383" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#SVGID_3_)" d="M54.1,15.3c-1.8-1.8-4.7-1.9-6.8-0.4l-2.7,2c0,0,0,0,0,0L32,26.3L19.5,17c0,0,0,0,0,0c0,0,0,0,0,0l-2.7-2	c-2.1-1.6-5-1.4-6.8,0.4C8.7,16.6,8,18.2,8,19.9v26.7c0,1.9,1.6,3.5,3.5,3.5H19c0.6,0,1-0.4,1-1V32.9l11.4,8.4	c0.2,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2L44,32.9v16.2c0,0.6,0.4,1,1,1h7.5c2.1,0,3.5-1.3,3.5-3.1V19.9	C56,18.2,55.3,16.6,54.1,15.3z M10,19.9c0-1.2,0.5-2.3,1.3-3.1c0.6-0.6,1.4-0.9,2.2-0.9c0.7,0,1.4,0.2,2.1,0.7l2.5,1.8	c0,0,0,0.1,0,0.1v10.4L10,23V19.9z M11.5,48.1c-0.8,0-1.5-0.7-1.5-1.5V25.5l8,5.9V40h-3v2h3v2h-5v2h5v2.1H11.5z M44,30.4l-12,8.9	l-12-8.9V19.9l11.4,8.4c0.2,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2L44,19.9V30.4z M48.5,16.6c1.3-1,3.1-0.9,4.3,0.2	c0.8,0.8,1.3,1.9,1.3,3.1V23l-8,5.9V18.5c0,0,0-0.1,0-0.1L48.5,16.6z M52.5,48.1H46V31.4l8-5.9V40h-3v2h3v2h-5v2h5v1	C54,48,53,48.1,52.5,48.1z"/></svg></a></li>
                    <li className="hover:bg-white rounded-full p-1"><a aria-label='instagram' href="https://www.instagram.com/dishank2911/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="35px" height="35px"><linearGradient id="jm_nAfYbxsVmTlYr5N4x9a" x1="32" x2="32" y1="6.667" y2="57.872" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#jm_nAfYbxsVmTlYr5N4x9a)" d="M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z"/><linearGradient id="jm_nAfYbxsVmTlYr5N4x9b" x1="32" x2="32" y1="18.167" y2="45.679" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"/><stop offset="1" stopColor="#e6abff"/></linearGradient><path fill="url(#jm_nAfYbxsVmTlYr5N4x9b)" d="M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z"/><linearGradient id="jm_nAfYbxsVmTlYr5N4x9c" x1="46" x2="46" y1="12.75" y2="23.049" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"/><stop offset="1" stopColor="#e6abff"/></linearGradient><path fill="url(#jm_nAfYbxsVmTlYr5N4x9c)" d="M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z"/></svg></a></li>
                    <li className="hover:bg-white rounded-full p-1"><a aria-label='facebook' href="https://www.facebook.com/patel.dishank.5" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="35px" height="35px"><linearGradient id="rhA40cqBlsJ1wx2ZjgJTqa" x1="32.526" x2="32.526" y1="16.627" y2="56.834" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"/><stop offset="1" stopColor="#e6abff"/></linearGradient><path fill="url(#rhA40cqBlsJ1wx2ZjgJTqa)" d="M35.52,38.891h6.729l1.057-6.835H35.52v-3.736c0-2.839,0.928-5.358,3.584-5.358h4.268v-5.966c-0.75-0.101-2.335-0.323-5.332-0.323c-6.258,0-9.926,3.305-9.926,10.834v4.548h-6.433v6.835h6.433v17.788C29.385,56.869,30.676,57,32,57c1.197,0,2.366-0.109,3.52-0.266V38.891z"/><linearGradient id="rhA40cqBlsJ1wx2ZjgJTqb" x1="32" x2="32" y1="58" y2="6" gradientTransform="matrix(1 0 0 -1 0 64)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="none" stroke="url(#rhA40cqBlsJ1wx2ZjgJTqb)" strokeMiterlimit="10" strokeWidth="2" d="M32 7A25 25 0 1 0 32 57A25 25 0 1 0 32 7Z"/></svg></a></li>
                    <li className="hover:bg-white rounded-full p-1"><a aria-label='whatsapp' href="https://api.whatsapp.com/send?phone=917046004546&amp;text=Hii there!" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="35px" height="35px" fillRule="evenodd" clipRule="evenodd"><linearGradient id="fzF5K76u~QPjMIgETt7bMa" x1="32" x2="32" y1="5.25" y2="58.834" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#fzF5K76u~QPjMIgETt7bMa)" d="M6.399,57.699l3.792-13.847c-2.076-3.74-3.17-7.975-3.168-12.272 C7.028,17.641,18.373,6.301,32.312,6.301c6.762,0.003,13.115,2.636,17.889,7.414c4.774,4.778,7.402,11.151,7.4,17.944 C57.595,45.633,46.25,57,32.312,57c-4.024,0-8.073-1.019-11.744-2.95L6.399,57.699z M20.828,51.918l0.346,0.188 C24.645,53.999,28.492,55,32.302,55c12.846,0,23.293-10.471,23.299-23.341c0.002-6.26-2.418-12.13-6.814-16.53 S38.538,8.304,32.312,8.301c-12.836,0-23.283,10.443-23.288,23.279c-0.002,4.089,1.072,8.113,3.107,11.639l0.209,0.361L9.239,54.902 L20.828,51.918z M32.312,53c-3.686,0-7.415-1.06-10.793-3.063l-0.437-0.318l-8.854,2.323l2.382-8.691l-0.244-0.387 c-2.123-3.376-3.243-7.271-3.241-11.269c0.004-11.67,9.513-21.165,21.195-21.165c5.642,0.002,10.961,2.218,14.979,6.239 c4,4.003,6.202,9.345,6.2,15.039C53.495,43.448,43.99,53,32.312,53z M22.583,48.242C25.641,50.047,29.001,51,32.304,51 c10.584,0,19.191-8.654,19.195-19.292c0.002-5.161-1.992-10-5.614-13.625c-3.642-3.644-8.459-5.651-13.565-5.653 c-10.581,0-19.191,8.598-19.195,19.166c-0.002,3.619,1.012,7.146,2.933,10.201l0.715,1.131l-1.698,6.199l6.429-1.687L22.583,48.242z"/><linearGradient id="fzF5K76u~QPjMIgETt7bMb" x1="32.305" x2="32.305" y1="17.5" y2="46.527" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"/><stop offset="1" stopColor="#e6abff"/></linearGradient><path fill="url(#fzF5K76u~QPjMIgETt7bMb)" fillRule="evenodd" d="M26.12,21.219c-0.464-1.031-0.952-1.052-1.394-1.07 c-0.361-0.015-0.774-0.015-1.187-0.015c-0.413,0-1.084,0.155-1.651,0.775c-0.568,0.62-2.168,2.118-2.168,5.164 c0,3.047,2.219,5.991,2.529,6.405c0.31,0.413,4.284,6.865,10.579,9.347c5.231,2.063,6.296,1.653,7.431,1.549 c1.135-0.103,3.664-1.498,4.18-2.944c0.516-1.446,0.516-2.685,0.361-2.944c-0.155-0.258-0.568-0.413-1.187-0.723 c-0.619-0.31-3.664-1.808-4.232-2.014c-0.568-0.206-0.981-0.31-1.394,0.31c-0.413,0.619-1.599,2.014-1.96,2.427 c-0.361,0.414-0.723,0.465-1.342,0.156c-0.619-0.311-2.614-0.964-4.98-3.074c-1.841-1.641-3.084-3.668-3.445-4.288 c-0.361-0.619-0.039-0.955,0.272-1.264c0.278-0.277,0.619-0.723,0.929-1.085c0.309-0.362,0.412-0.62,0.619-1.033 c0.206-0.414,0.103-0.775-0.052-1.085S26.67,22.443,26.12,21.219z" clipRule="evenodd"/></svg></a></li>
                </ul>
      <div className="rounded-3xl py-[0.5px] bg-white container mx-auto"></div>
      <p className="pt-10 text-center">Dishank. &copy 2022. All Right Reserved. Designed By Dishank Patel.</p>

    </div>
  </footer>
  )
}

export default memo(Footer);