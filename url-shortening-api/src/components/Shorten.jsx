.statistics-container {
    position: relative;
    margin-bottom: 0.5rem;
  }
  .background-line {
    display: none;
  }
  .statistics-header {
    display: flex;
    width: 100%;
    margin: auto;
    flex-direction: column;
    text-align: center;
  }
  
  .cards-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 4rem;
  }
  
  .cards-container > article {
    flex: 1;
    position: relative;
    height: fit-content;
    background-color: white;
    border-radius: 10px;
    padding: 2rem 1rem 1rem 1rem;
    margin-bottom: 6rem;
    text-align: center;
  }
  
  .mobile-background-line {
    display: block;
      position: absolute;
      width: 3%;
      height: 50%;
      top: 50%;
      left: 50%; 
      transform: translate(-50%, -50%); 
      z-index: -10;
      background-color: var(--Cyan);
  }

  .cards-container > article:last-child {
    margin-right: 0;
  }
  
  .cards-container > article > img {
    position: absolute;
    top: -45px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    background-color: var(--DarkViolet);
    padding: 1rem;
    border-radius: 50%;
  }
  
  @media screen and (min-width: 375px) {
    .statistics-header {
      width: 50%;
    }
  
    .cards-container {
      flex-direction: row;
    }
  
    .cards-container > article {
      padding: 2rem;
      margin-right: 1.5rem;
      margin-bottom: 1.5rem;
      text-align: left;
    }
  
    .background-line {
      display: block;
      position: absolute;
      width: 80%;
      top: 70%;
      z-index: -1;
      background-color: var(--Cyan);
    }
    .mobile-background-line {
      display: none;
    }
    .cards-container > article > img {
      left: 20%;
    }
  
  
    .cards-container > article:nth-child(2) {
      margin-top: 3rem;
    }
    .cards-container > article:nth-child(3) {
      margin-top: 6rem;
    }
  }
  
