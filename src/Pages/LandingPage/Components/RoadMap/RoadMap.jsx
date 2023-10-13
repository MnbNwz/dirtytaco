import "./RoadMap.scss";
const RoadMap = () => {
  const percent = [15, 30, 60, 75, 90, 100];
  const roadmapContent = [
    {
      title: "Phase 1",
      text: "Discord launch/ Website launch. Random members will be rewarded with free eth and taco giveaways/raffles daily. Create a community of exclusive dirty members only. Tease art. ",
    },
    {
      title: "Phase 2",
      text: "Minting begins - Launch Collection. Reward holders with more giveaways/raffles. ",
    },
    {
      title: "Phase 3",
      text: "Reveal 2-3 days after mint!, since we are a NY restaurant, minting will be open for exactly 3 WEEKS only!. Dirty perks initiated, use your exclusive VIP membership at any dirty taco location. Reap the rewards. ",
    },
    {
      title: "Phase 4",
      text: "Merch: Holders of 1 DT-NFT will receive one FREE dirty GUY/GIRL shirt Holders of 2 DT-NFT will receive 2 shirts and so on.1 free Dirty headband, dirty dog (dog shirt), dirty underwear(thong/boxers for holding your nft for 1 full month. ",
    },
    {
      title: "Phase 5",
      text: "Dirty Parties. DTNFT will host 1-2 massive parties a year for holders only. Free drinks, Free food. ",
    },
    {
      title: "Phase 6",
      text: "Airdrop for holders. Holders of 1 DT-NFT will be airdropped a new NFT of a whole different and new collection, mutations perhaps may or may not be involved 👀 Stay tuned for updates!. IF you hold 2 DT-NFT you will be airdropped 2 NFTs and so on... Minting for new collection begins… ",
    },
  ];
  return (
    <>
    <div className="dtNft spacing">
      <div className="container">
        <h1>Why DT-NFT? </h1>
        <p>The birth of this project came from several discussions. Being part of the NFT community for a long time now, we noticed the lack of any real utility when it comes to NFTs in general. we want to remediate this by becoming the NFT pioneers in the area(ny)while also doing something that elevates NFTs themselves. We also want to be the first ones in the food and restaurant industry to implement blockchain technology in the area. </p>
        <p>Our vision is to create an exclsuive Dirty Taco VIP club where everyone has the chance to make money together, but also get their money's value via our exclusive services and perks, above all we want to create a family and be closer to our clientele. </p>  
        <p>We strongly believe NFTs will change the restaurant industry, and we are priviliged to be in a position to act on this belief and pioneer blockchain technology integration in our industry and community. We choose to run our discord server just the way we run each and every Dirty Taco location! With love and a1ppreciation! </p>
      </div>  
    </div>
    <div id="roadmap" className="roadmap-block spacing">
      <div className="container-fluid">
        <h1>Our Roadmap</h1>
        <div className="map-content">
          <ul>
            {percent.map((value) => (
              <li>
                <div className="round-content">{value}%</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          {roadmapContent.map((value) => (
            <div className="col col-3">
              <div className="text-content">
                <h2>{value.title}</h2>
                <p>{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};
export default RoadMap;
