import styled from "styled-components";

const Bubble2 = () => {
  return (
    <Container>
      <div className="center">
        <svg
          fill="transparent"
          version="1.1"
          x="0px"
          y="0px"
          width="206px"
          height="206px"
          viewBox="0 0 206 206"
          xmlSpace="preserve"
        >
          <g id="Background">
            <rect
              x="-4.181"
              y="-4.183"
              stroke="#FFFFFF"
              width="214.364"
              height="214.364"
            />
          </g>
          <g id="BigCube">
            <polygon
              fill="#BFE5E5"
              points="16.402,53.002 16.402,53.002
103.002,103.001 189.604,53.002 103.002,3.002    "
            />
            <polygon
              fill="#00B0F0"
              points="103.002,103.001 103.002,203
103.002,203.001 189.604,153.001 189.604,53.002 103.002,103.001  "
            />
            <polygon
              fill="#0083CA"
              points="16.4,53.002 16.402,153.001
103.002,203.001 103.002,203 103.002,103.001 103.002,103.001
                16.402,53.002 16.402,53.002     "
            />
          </g>
          <g id="LittleCube">
            <polygon
              fill="#BFE5E5"
              points="146.301,128.001 146.301,128.001
103,103.001 59.7,128.001 103,153.001    "
            />
            <polygon
              fill="#00B0F0"
              points="103.002,103.001 103.002,53.002
103,53.002 59.7,78.002 59.7,128.001 103,103.001         "
            />
            <polygon
              fill="#0083CA"
              points="146.303,128.001 146.301,78.002
103,53.002 103.002,53.002 103.002,103.001 103,103.001
                146.301,128.001 146.301,128.001         "
            />
          </g>
          <g id="SecretCube">
            <polygon
              fill="#BFE5E5"
              points="146.301,128.001 146.301,128.001
103,103.001 59.7,128.001 103,153.001    "
            />
            <polygon
              fill="#00B0F0"
              points="103.002,103.001 103.002,53.002
103,53.002 59.7,78.002 59.7,128.001 103,103.001         "
            />
            <polygon
              fill="#0083CA"
              points="146.303,128.001 146.301,78.002
103,53.002 103.002,53.002 103.002,103.001 103,103.001
                146.301,128.001 146.301,128.001         "
            />
          </g>
        </svg>
      </div>
    </Container>
  );
};

export default Bubble2;

const Container = styled.div`
  .center {
    text-align: center;
    padding: 50px;
  }

  @keyframes bigcubemotion {
    0% {
      transform: rotate(0turn);
    }
    5% {
      transform: rotate(0turn);
    }
    40% {
      transform: rotate(0.5turn);
    }
    100% {
      transform: rotate(0.5turn);
    }
  }

  #BigCube {
    transform-origin: 50% 50%;
    animation-timing-function: ease-in-out;
    animation-name: bigcubemotion;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes littlecubemotion {
    0% {
      transform: rotate(0turn);
    }
    5% {
      transform: rotate(0turn);
    }
    40% {
      transform: rotate(0.5turn);
    }
    66% {
      transform: rotate(0.5turn) scale(2.07);
    }
    97% {
      transform: rotate(0.5turn) scale(2);
    }
    100% {
      transform: rotate(0.5turn) scale(2);
    }
  }

  #LittleCube {
    transform-origin: 50% 50%;
    animation-timing-function: ease-in-out;
    animation-name: littlecubemotion;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes secretcubemotion {
    0% {
      transform: scale(0);
    }
    5% {
      transform: scale(0);
    }
    40% {
      transform: scale(0);
    }
    67% {
      transform: scale(1.13);
    }
    95% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }

  #SecretCube1 {
    transform-origin: 50% 50%;
    animation-timing-function: cubic;
    animation-name: secretcubemotion;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;
