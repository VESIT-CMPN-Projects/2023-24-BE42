import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const WeightedTreeComponent = ({ centralNodeUsername, centralNodeImageUrl, profilesData }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (profilesData && svgRef.current) {
      const width = 800;
      const height = 600;

      // Convert the profiles data to the required hierarchy format
      const root = d3.hierarchy({
        name: centralNodeUsername,
        image: centralNodeImageUrl,
        children: profilesData.map(profile => ({
          name: profile.username,
          image: profile.img,
          value: +profile.number_of_mentions,
        })),
      });

      // Create a tree layout
      const tree = d3.tree().size([width, height]);

      const treeData = tree(root);

      const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(50, 50)'); // Adjust the translation as needed

      // Create links
      const link = svg.selectAll('.link')
        .data(treeData.links())
        .enter().append('path')
        .attr('class', 'link')
        .attr('d', d => `M${d.source.y},${d.source.x}L${d.target.y},${d.target.x}`);

      // Create nodes
      const node = svg.selectAll('.node')
        .data(treeData.descendants())
        .enter().append('g')
        .attr('class', 'node')
        .attr('transform', d => `translate(${d.y},${d.x})`);

      // Create rounded profile images
      node.append('circle')
        .attr('r', d => d.data.name === centralNodeUsername ? 20 : 10) // Adjust the radius for central and other nodes
        .style('fill', d => (d.data.name === centralNodeUsername ? 'orange' : '#1DA1F2'));

      // Create text labels on hover
      node.append('title')
        .text(d => `${d.data.name}\nNumber of Mentions: ${d.data.value}`);

      // Add images inside circles
      node.append('image')
        .attr('xlink:href', d => d.data.image)
        .attr('x', d => d.data.name === centralNodeUsername ? -20 : -10) // Adjust image position for central and other nodes
        .attr('y', d => d.data.name === centralNodeUsername ? -20 : -10) // Adjust image position for central and other nodes
        .attr('width', d => d.data.name === centralNodeUsername ? 40 : 20) // Adjust image size for central and other nodes
        .attr('height', d => d.data.name === centralNodeUsername ? 40 : 20); // Adjust image size for central and other nodes

      return () => {
        // Clean up when the component unmounts
      };
    }
  }, [centralNodeUsername, centralNodeImageUrl, profilesData]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default WeightedTreeComponent;
  