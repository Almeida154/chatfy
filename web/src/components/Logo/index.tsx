const Logo = ({ primaryColor = '#703FFF', secondColor = '#0A004F', size = 300 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 300 300"
  >
    <path
      fill={secondColor}
      d="M63.763 148.453c0-3.896.784-7.294 2.35-10.193 1.568-2.945 3.74-5.21 6.516-6.796 2.776-1.631 5.956-2.446 9.538-2.446 4.612 0 8.418 1.178 11.418 3.534 3.045 2.31 5.082 5.572 6.112 9.785H89.555c-.537-1.631-1.455-2.899-2.754-3.806-1.254-.951-2.82-1.427-4.701-1.427-2.687 0-4.814.997-6.381 2.99-1.567 1.948-2.351 4.735-2.351 8.359 0 3.579.784 6.365 2.35 8.358 1.568 1.948 3.695 2.922 6.382 2.922 3.806 0 6.29-1.721 7.455-5.164h10.142c-1.03 4.077-3.067 7.316-6.112 9.717-3.045 2.401-6.85 3.602-11.418 3.602-3.582 0-6.762-.793-9.538-2.379-2.776-1.631-4.948-3.896-6.515-6.795-1.567-2.945-2.35-6.365-2.35-10.261ZM127.542 129.086c2.821 0 5.329.634 7.523 1.903 2.194 1.223 3.895 3.058 5.104 5.504 1.254 2.401 1.881 5.3 1.881 8.698v22.085h-9.403v-20.794c0-2.99-.739-5.278-2.217-6.863-1.477-1.631-3.492-2.447-6.045-2.447-2.597 0-4.657.816-6.179 2.447-1.478 1.585-2.217 3.873-2.217 6.863v20.794h-9.403V116.99h9.403v17.328c1.209-1.631 2.821-2.899 4.836-3.805 2.015-.951 4.254-1.427 6.717-1.427ZM148.574 148.317c0-3.806.739-7.181 2.217-10.125 1.522-2.945 3.56-5.21 6.112-6.796 2.597-1.585 5.485-2.378 8.664-2.378 2.777 0 5.195.566 7.254 1.699 2.105 1.132 3.784 2.559 5.038 4.281v-5.369h9.47v37.647h-9.47v-5.504c-1.209 1.767-2.888 3.239-5.038 4.417-2.104 1.132-4.545 1.699-7.321 1.699-3.134 0-6-.816-8.597-2.447-2.552-1.631-4.59-3.918-6.112-6.863-1.478-2.99-2.217-6.41-2.217-10.261Zm29.285.136c0-2.311-.448-4.281-1.343-5.912-.896-1.676-2.105-2.945-3.627-3.806a9.428 9.428 0 0 0-4.904-1.359 9.447 9.447 0 0 0-4.836 1.291c-1.477.861-2.686 2.13-3.627 3.806-.895 1.631-1.343 3.579-1.343 5.844s.448 4.258 1.343 5.98c.941 1.676 2.15 2.967 3.627 3.873 1.523.906 3.135 1.359 4.836 1.359 1.747 0 3.381-.43 4.904-1.291 1.522-.906 2.731-2.174 3.627-3.805.895-1.676 1.343-3.67 1.343-5.98ZM207.462 137.444v18.212c0 1.268.291 2.197.873 2.786.627.544 1.657.816 3.089.816h4.366v8.018h-5.91c-7.926 0-11.889-3.896-11.889-11.688v-18.144h-4.433v-7.815h4.433v-9.309h9.471v9.309h8.328v7.815h-8.328ZM227.322 125.144c-1.656 0-3.044-.52-4.164-1.562-1.075-1.088-1.612-2.424-1.612-4.01 0-1.585.537-2.899 1.612-3.941 1.12-1.087 2.508-1.631 4.164-1.631 1.657 0 3.023.544 4.098 1.631 1.119 1.042 1.679 2.356 1.679 3.941 0 1.586-.56 2.922-1.679 4.01-1.075 1.042-2.441 1.562-4.098 1.562Zm4.635 4.485v37.647h-9.403v-37.647h9.403ZM258.308 137.444h-6.515v29.832h-9.538v-29.832h-4.232v-7.815h4.232v-1.902c0-4.621 1.299-8.019 3.896-10.193 2.597-2.175 6.515-3.194 11.754-3.058v8.018c-2.284-.045-3.873.34-4.769 1.156-.896.815-1.343 2.287-1.343 4.417v1.562h6.515v7.815ZM300 129.629l-23.038 55.451h-10.008l8.06-18.755-14.911-36.696h10.545l9.605 26.299 9.739-26.299H300Z"
    />
    <circle cx={39.721} cy={135.951} r={12.544} fill={secondColor} />
    <circle cx={12.544} cy={163.129} r={12.544} fill={secondColor} />
    <path
      fill={primaryColor}
      d="M27.178 162.585c0-6.627 5.372-12 12-12h1.087c6.627 0 12 5.373 12 12v1.087c0 6.628-5.373 12-12 12H27.178v-13.087Z"
    />
    <circle cx={36.585} cy={163.129} r={2.091} fill={secondColor} />
    <circle cx={41.812} cy={163.129} r={2.091} fill={secondColor} />
    <path
      fill={primaryColor}
      d="M12 123.408c-6.627 0-12 5.372-12 12v1.087c0 6.627 5.373 12 12 12h1.087c6.628 0 12-5.373 12-12v-13.087H12Z"
    />
    <circle
      cx={2.091}
      cy={2.091}
      r={2.091}
      fill={secondColor}
      transform="matrix(0 1 1 0 10.453 130.725)"
    />
    <circle
      cx={2.091}
      cy={2.091}
      r={2.091}
      fill={secondColor}
      transform="matrix(0 1 1 0 10.453 135.951)"
    />
  </svg>
);

export { Logo };
