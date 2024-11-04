import { useState } from 'react';
import Link from 'next/link';

const DynamicNav = ({ navigation }) => {
  // Utility function to build a hierarchical navigation structure with sorting by navPriority
  const buildHierarchy = (navItems) => {
    const map = {};

    // Populate map with all items
    navItems.forEach((item) => {
      const parts = item.data.url.split('/').filter(Boolean); // Split URL and remove empty parts
      const key = parts.join('/');

      map[key] = { ...item, children: [] };
    });

    // Assign children based on URL hierarchy
    Object.keys(map).forEach((key) => {
      const item = map[key];
      const parentKey = key.split('/').slice(0, -1).join('/');

      if (parentKey && map[parentKey]) {
        map[parentKey].children.push(item);
      }
    });

    // Sort function to order items by navPriority (descending), treating null as lower priority
    const sortByNavPriority = (a, b) => {
      const priorityA = a.data.navPriority ?? 0;
      const priorityB = b.data.navPriority ?? 0;
      return priorityB - priorityA;
    };

    // Apply sorting to top-level items and recursively to children
    const sortedItems = Object.values(map)
      .filter((item) => !item.data.url.split('/').slice(0, -1).join('/'))
      .sort(sortByNavPriority);

    const sortChildren = (items) => {
      items.forEach((item) => {
        if (item.children && item.children.length > 0) {
          item.children.sort(sortByNavPriority);
          sortChildren(item.children); // Recursive sort for nested levels
        }
      });
    };

    sortChildren(sortedItems);
    return sortedItems;
  };

  const hierarchicalNav = buildHierarchy(navigation);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <nav className="space-y-4 p-4">
      <div className="flex space-x-4">
        {hierarchicalNav.map((item, index) => (
          <div key={index} className="relative">
            {/* Top-level link */}
            <div
              onClick={() => handleExpand(index)}
              className="text-primaryDark hover:text-secondaryDark font-medium focus:outline-none cursor-pointer"
            >
              {item.data.navigationTitle}
            </div>

            {/* Dropdown for child pages */}
            {expandedIndex === index && item.children.length > 0 && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md p-2 w-40">
                {item.children.map((child, childIndex) => (
                  <Link
                    href={child.data.url}
                    key={childIndex}
                    className="block text-primaryDark hover:text-secondaryDark px-4 py-2"
                  >
                    {child.data.navigationTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default DynamicNav;
