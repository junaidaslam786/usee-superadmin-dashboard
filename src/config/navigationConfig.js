/* eslint-disable no-sparse-arrays */
import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    // type: "collapse",
    icon: <Icon.Monitor size={20} />,
    badge: "warning",
    // badgeText: "2",
    navLink: "/dashboard"
  },
  {
    id: "profile",
    title: "Profile",
    // type: "collapse",
    icon: <Icon.Monitor size={20} />,
    badge: "warning",
    // badgeText: "2",
    navLink: "/profile"
  },
  {
    id: "property",
    title: "Property",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    children: [
      {
        id: "propertyList2",
        title: "Property List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/property/property-list"
      },
      // {
      //   id: "propertyRemoveRequest",
      //   title: "Property Remove Request",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin"],
      //   navLink: "/property/property-remove-request"
      // },

      // {
      //   id: "removedProperty",
      //   title: "Removed Property",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin"],
      //   navLink: "/property/removed-property"
      // },
      // {
      //   id: "propertyTypedList",
      //   title: "Property Typed List",
      //   type: "item",
      //   icon: <Icon.Home size={20} />,
      //   permissions: ["admin"],
      //   navLink: "/property/property-typed-list"
      // },
    ],
  },
  {
    id: "appointments",
    title: "Appointments",
    type: "collapse",
    icon: <Icon.Calendar size={20} />,
    children: [
      {
        id: "all-appointments",
        title: "Appointments Listing",
        // title: "Completed Appointments",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/appointments/all-appointments"
      },
      // {
      //   id: "upcoming-appointments",
      //   title: "Upcoming Appointments",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   navLink: "/appointments/upcoming-appointments"
      // }
    ]
  },
  {
    id: "news-management",
    title: "News",
    type: "collapse",
    icon: <Icon.Feather size={20} />,
    children: [
      {
        id: "add-news",
        title: "Add News",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/news/add-news"
      },
      {
        id: "all-news",
        title: "News Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/news/all-news"
      }
    ]
  },
  {
    id: "blog-management",
    title: "Blogs",
    type: "collapse",
    icon: <Icon.Feather size={20} />,
    children: [
      {
        id: "add-blog",
        title: "Add Blog",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/blog/add-blog"
      },
      {
        id: "all-blog",
        title: "Blogs Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/blog/all-blogs"
      }
    ]
  },
  {
    id: "community-qa-management",
    title: "Community",
    type: "collapse",
    icon: <Icon.Feather size={20} />,
    children: [
      {
        id: "add-community",
        title: "Add Community",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/cms/add-community"
      },
      {
        id: "community-listing",
        title: "Community Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/cms/community-listing"
      }
    ]
  },

  {
    id: "customers",
    title: "Customers",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    children: [
      {
        id: "add-customer",
        title: "Add Customer",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/customer/add-customer"
      },
      {
        id: "customer-listing",
        title: "Customer Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/customer/customer-listing"
      },
    ]
  },
  {
    id: "traders",
    title: "Traders",
    type: "collapse",
    icon: <Icon.UserCheck size={20} />,
    children: [
      {
        id: "add-trader",
        title: "Add Trader",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/trader/add-trader"
      },
      {
        id: "traders-listing",
        title: "Traders Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/trader/trader-listing"
      },
      {
        id: "blocked-traders",
        title: "Blocked Traders",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/trader/blocked-traders"
      }
    ]
  },
  {
    id: "userManagement",
    title: "User Management",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "createUser",
        title: "Create User",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/user/create-admin"
      },
      {
        id: "listingUser",
        title: "Users Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/user/listing-admin"
      }
    ]
  },

]

export default navigationConfig
