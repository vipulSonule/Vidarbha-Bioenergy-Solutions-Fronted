import React, { useState } from "react";
import "./Blogs.css";
import blog1 from "../assets/blogs-1.jpg";
import blog2 from "../assets/blogs-2.jpg";
import blog3 from "../assets/blogs-3.jpg";
import blog4 from "../assets/blogs-4.jpg";
import blog5 from "../assets/blogs-5.jpg";
// import { image } from "framer-motion/client";

const blogsData = [
  { 
    id: 1, 
    title: "Biomass Energy: A Sustainable Solution for a Greener Future", 
    date: "Nov 07, 2023",
    description: "As the world grapples with the challenges of climate change and energy security,", 
    fullContent: `<h2>Introduction</h2>
    <p>As the world grapples with the challenges of climate change and energy security, the need for sustainable and renewable energy sources has never been more urgent. Biomass energy, derived from organic materials such as wood, agricultural residues, and animal waste, offers a promising alternative to fossil fuels. This blog explores how biomass energy is shaping the future of clean energy and contributing to a greener planet.</p>

    <h2>What is Biomass Energy?</h2>
    <p>Biomass energy refers to the use of organic materials to generate heat, electricity, or biofuels. It can come from a variety of sources, including:</p>
    <ul>
      <li><strong>Wood and Forestry Residues:</strong> Logs, branches, and sawdust from forests and lumber mills.</li>
      <li><strong>Agricultural Waste:</strong> Crop residues, sugarcane bagasse, and husks.</li>
      <li><strong>Animal Manure and Organic Waste:</strong> Livestock waste and biodegradable household waste.</li>
      <li><strong>Algae and Energy Crops:</strong> Fast-growing plants cultivated specifically for energy production.</li>
    </ul>

    <h2>How Biomass Energy Works</h2>
    <p>Biomass energy can be harnessed through various processes, including:</p>
    <ol>
      <li><strong>Combustion:</strong> Burning biomass to produce heat and generate electricity.</li>
      <li><strong>Gasification:</strong> Converting biomass into syngas (synthetic gas) for power generation.</li>
      <li><strong>Anaerobic Digestion:</strong> Breaking down organic matter to produce biogas, which can be used for heating and electricity.</li>
      <li><strong>Fermentation:</strong> Converting biomass into biofuels such as ethanol and biodiesel.</li>
    </ol>

    <h2>Advantages of Biomass Energy</h2>
    <ul>
      <li><strong>Renewable and Sustainable:</strong> Unlike fossil fuels, biomass sources can be replenished through responsible farming and forestry practices.</li>
      <li><strong>Carbon Neutral:</strong> Biomass emits carbon dioxide when burned, but this is offset by the carbon absorbed by plants during their growth cycle.</li>
      <li><strong>Waste Reduction:</strong> Utilizing agricultural and organic waste for energy helps in waste management and reduces landfill accumulation.</li>
      <li><strong>Energy Security:</strong> Biomass energy diversifies energy sources and reduces dependence on imported fossil fuels.</li>
      <li><strong>Economic Growth:</strong> Biomass industries create jobs in agriculture, waste management, and energy production.</li>
    </ul>

    <h2>Challenges and Solutions</h2>
    <p>Despite its benefits, biomass energy faces some challenges:</p>
    <ul>
      <li><strong>Deforestation Risks:</strong> Unsustainable biomass harvesting can lead to environmental degradation. <em>Solution:</em> Promote responsible forestry and sustainable sourcing.</li>
      <li><strong>Emissions and Air Pollution:</strong> Some biomass combustion processes release pollutants. <em>Solution:</em> Adopt advanced combustion technologies with emission control systems.</li>
      <li><strong>High Initial Costs:</strong> Biomass energy projects can be expensive to set up. <em>Solution:</em> Encourage government incentives and investments in research and development.</li>
    </ul>

    <h2>Future Prospects of Biomass Energy</h2>
    <p>With advancements in technology, biomass energy is becoming more efficient and accessible. Innovations such as biomass co-firing in power plants, algae-based biofuels, and next-generation biorefineries are driving the future of sustainable energy. Governments and industries worldwide are recognizing its potential and investing in biomass projects to achieve carbon neutrality goals.</p>

    <h2>Conclusion</h2>
    <p>Biomass energy stands as a viable and sustainable alternative to fossil fuels, offering a path toward a cleaner and greener future. By harnessing organic waste and renewable resources, we can reduce greenhouse gas emissions, promote energy security, and drive economic growth. As we continue to innovate and improve biomass technologies, this renewable energy source will play a crucial role in building a sustainable energy landscape for generations to come.</p>
    `,
     image: blog1 
  },

  { 
    id: 2,
    title: "How Biomass Pellets are Revolutionizing the Renewable Energy Sector",
    date: "Oct 17, 2023",
    description: "Exploring how biomass pellets are transforming the energy landscape.",
    fullContent: `
      <h2>Introduction</h2>
      <p>As the demand for sustainable and clean energy solutions continues to grow, biomass pellets have emerged as a game-changer in the renewable energy sector. These compact, energy-dense fuel sources are made from organic materials such as wood, agricultural residues, and other biomass waste.</p>

      <h2>What are Biomass Pellets?</h2>
      <p>Biomass pellets are small, cylindrical pieces of compressed organic material. They are produced by drying and compacting biomass waste, which increases their energy density and makes them easier to store and transport.</p>
      <ul>
        <li><strong>Wood Waste:</strong> Sawdust, wood chips, and forestry residues.</li>
        <li><strong>Agricultural Residues:</strong> Corn stalks, rice husks, and wheat straw.</li>
        <li><strong>Organic Waste:</strong> Paper waste, nutshells, and other biodegradable materials.</li>
      </ul>

      <h2>How Biomass Pellets are Used</h2>
      <ol>
        <li><strong>Power Generation:</strong> Co-firing with coal to reduce emissions.</li>
        <li><strong>Industrial Heating:</strong> Biomass pellet boilers for process heating.</li>
        <li><strong>Residential Heating:</strong> Pellet stoves and boilers.</li>
        <li><strong>Co-Firing in Power Plants:</strong> Transitioning traditional plants to renewable energy.</li>
      </ol>

      <h2>Advantages of Biomass Pellets</h2>
      <ul>
        <li><strong>High Energy Efficiency:</strong> Biomass pellets have a high calorific value, making them an efficient fuel source.</li>
        <li><strong>Carbon Neutral:</strong> They release CO2 when burned, offset by carbon absorbed during plant growth.</li>
        <li><strong>Low Moisture Content:</strong> Improved combustion efficiency with less smoke.</li>
        <li><strong>Cost-Effective:</strong> More economical than fossil fuels.</li>
        <li><strong>Waste Reduction:</strong> Utilizes agricultural and forestry residues.</li>
      </ul>

      <h2>Challenges and Solutions</h2>
      <ul>
        <li><strong>Production Costs:</strong> Pelletizing requires energy. <em>Solution:</em> Invest in efficient technologies.</li>
        <li><strong>Supply Chain Issues:</strong> Transport challenges. <em>Solution:</em> Develop local facilities.</li>
        <li><strong>Public Awareness:</strong> Lack of awareness. <em>Solution:</em> Government incentives and campaigns.</li>
      </ul>

      <h2>Future Prospects of Biomass Pellets</h2>
      <p>Technological advancements are making biomass pellet production more efficient. Countries are adopting biomass policies to meet renewable energy targets, promoting sustainability and innovation.</p>

      <h2>Conclusion</h2>
      <p>Biomass pellets are revolutionizing the renewable energy sector by offering a sustainable, efficient, and eco-friendly alternative to fossil fuels. As innovation continues, they will play a vital role in creating a greener future.</p>
    `,
    image: blog2 
    },
  {  id: 3,
    title: "Wood Pellets vs. Agricultural Pellets: Which One is Better for Energy Production?",
    date: "Sep 22, 2023",
    description: "Comparing wood pellets and agricultural pellets for energy efficiency and sustainability.",
    fullContent: `
      <h2>Introduction</h2>
      <p>As the world transitions toward renewable energy sources, biomass pellets have become a crucial alternative to fossil fuels. Among the most widely used biomass fuels are wood pellets and agricultural pellets, both offering sustainable energy solutions. This blog compares wood pellets and agricultural pellets based on efficiency, sustainability, cost, and environmental impact.</p>

      <h2>What are Wood Pellets?</h2>
      <p>Wood pellets are made from compacted sawdust, wood chips, and other forestry residues. These pellets are widely used for heating, industrial applications, and power generation.</p>
      <ul>
        <li><strong>High Energy Density:</strong> Higher calorific value compared to many biomass alternatives.</li>
        <li><strong>Consistent Quality:</strong> Uniform composition and low moisture content.</li>
        <li><strong>Widely Available:</strong> Established supply chains ensure accessibility.</li>
        <li><strong>Longer Storage Life:</strong> Low moisture content prevents degradation over time.</li>
      </ul>

      <h2>What are Agricultural Pellets?</h2>
      <p>Agricultural pellets are made from crop residues such as straw, corn stalks, rice husks, and sugarcane bagasse. These pellets provide an effective way to utilize farm waste while generating renewable energy.</p>
      <ul>
        <li><strong>Abundant Raw Material:</strong> Agricultural waste is widely available.</li>
        <li><strong>Lower Cost:</strong> Generally cheaper than wood pellets.</li>
        <li><strong>Eco-Friendly:</strong> Reduces waste and promotes sustainable farming.</li>
        <li><strong>Supports Rural Economy:</strong> Encourages farmers to utilize crop waste for income.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Both wood pellets and agricultural pellets offer unique advantages in energy production. Wood pellets excel in efficiency and consistent performance, making them ideal for large-scale heating and industrial use. Agricultural pellets, on the other hand, are a cost-effective and environmentally friendly alternative that supports sustainable farming practices. The best choice ultimately depends on the specific energy needs, economic factors, and sustainability goals of the user.</p>
    `,
    image: blog3
     },
  { 
    id: 4,
    title: "Advantages of Using Biomass Pellets for Heating and Power Generation",
    date : "sep 22 2023",
    description: 'Advantages of Using Biomass Pellets for Heating and Power Generation',
    fullContent: `
      <h2>Introduction </h2>  
      <p>As the world seeks sustainable energy solutions, biomass pellets have emerged as an eco-friendly and efficient alternative to fossil fuels. 
      Derived from wood, agricultural residues, and organic waste, biomass pellets offer a renewable source of energy for heating and power generation. 
      This blog explores the key advantages of using biomass pellets and their growing role in the global energy landscape.  </p>

      <h2> Environmental Benefits of Biomass Pellets</h2>  
      <ul>
      <li><strong>Carbon Neutrality:</strong>Biomass pellets produce significantly lower carbon emissions compared to fossil fuels. The carbon released during combustion is offset by the carbon absorbed by plants during growth, making biomass a near-carbon-neutral energy source.  </li>
      <li><strong>Reduction in Waste:</strong>The use of agricultural and forestry residues for pellet production reduces waste disposal issues and promotes sustainable resource utilization.  </li>
      <li><strong>Lower Air Pollution:</strong>Biomass pellets generate fewer harmful emissions, such as sulfur dioxide and nitrogen oxides, which contribute to air pollution and acid rain.  </li>
      </ul>
      <h2> Economic Advantages <h2>
      <ul> 
      <li><strong>Cost-Effective Fuel:</strong> Biomass pellets are often more affordable than fossil fuels, particularly in regions with abundant agricultural or forestry waste.  </li>
      <li><strong>Job Creation:</strong> The biomass industry supports local economies by creating employment opportunities in pellet production, transportation, and power generation.  </li>
      </ul>
    `,image: blog4
   },
  { 
    id: 5, 
    title: 'The Role of Biomass Pellets in Reducing Carbon Footprint',
    date : "sep 22 2023",
    description: 'As the world faces the urgent need to combat climate change, biomass pellets have emerged as a sustainable energy solution to reduce carbon emissions. ',
    fullContent: `<h2>Introduction</h2>
    <p>As the world faces the urgent need to combat climate change, biomass pellets have emerged as a sustainable energy solution to reduce carbon emissions. Made from organic materials such as wood, agricultural residues, and organic waste, biomass pellets provide a cleaner alternative to fossil fuels. This blog explores the crucial role of biomass pellets in reducing the carbon footprint and promoting environmental sustainability.</p>
    <h2>How Biomass Pellets Reduce Carbon Emissions</h2>
    <ul>
    <li><strong>Carbon Neutral Energy Source:</strong> Unlike fossil fuels, biomass pellets are considered carbon-neutral because the carbon dioxide released during combustion is reabsorbed by plants during their growth cycle.</li>
    <li><strong>Replacement for Coal and Fossil Fuels:</strong> Co-firing biomass pellets with coal in power plants reduces overall greenhouse gas emissions and dependence on non-renewable resources.</li>
    <li><strong>Lower Methane Emissions:</strong> When organic waste is left to decompose, it releases methane, a potent greenhouse gas. Converting this waste into biomass pellets reduces methane emissions.</li>
    </ul>
    <h2>Environmental Benefits</h2>
    <ul>
    <li><strong>Sustainable Waste Management:</strong> Utilizing agricultural and forestry residues for pellet production prevents open burning and landfill waste accumulation.</li>
    <li><strong>Reduced Air Pollution: </strong>Biomass pellets produce significantly lower sulfur dioxide and nitrogen oxide emissions compared to coal and oil, improving air quality.</li>
    <li><strong>Forest Conservation:</strong> Sustainable biomass sourcing practices help maintain forest health and reduce deforestation.</li>
    </ul>
    <h2>Economic and Energy Security Advantages</h2>
    <ul>
    <li><strong>Local Energy Production:</strong> Biomass pellets provide an alternative to imported fossil fuels, enhancing national energy security.</li>
    <li><strong>Job Creation: </strong>The biomass industry supports rural economies by generating employment in pellet production, logistics, and energy generation.</li>
    <li><strong>Government Incentives:</strong> Many governments offer subsidies, tax benefits, and grants to encourage the adoption of biomass energy.</li>
    
    </ul>
    <h2>Conclusion</h2>
    <p>Biomass pellets offer an effective and sustainable solution to reducing carbon footprints and transitioning towards cleaner energy sources. By replacing fossil fuels, lowering emissions, and supporting circular economies, biomass pellets contribute to a greener, more sustainable future. As countries prioritize carbon reduction strategies, the adoption of biomass pellets will continue to grow, reinforcing their role in achieving global climate goals.</p>    
    `, image: blog5
    },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  // Pagination Logic
  const totalPages = Math.ceil(blogsData.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Our Latest Blogs</h1>

      <div className="blogs-grid">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <button onClick={() => openModal(blog)} className="read-more-btn">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>{selectedBlog.title}</h2>
            <p className="blog-date">{selectedBlog.date}</p>
            <div className="full-content" dangerouslySetInnerHTML={{ __html: selectedBlog.fullContent }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
