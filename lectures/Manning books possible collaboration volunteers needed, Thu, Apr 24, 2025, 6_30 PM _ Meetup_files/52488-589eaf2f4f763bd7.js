!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="41811d55-3aad-451f-b9c8-5373f6542694",e._sentryDebugIdIdentifier="sentry-dbid-41811d55-3aad-451f-b9c8-5373f6542694")}catch(e){}}();var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};"use strict";e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[Error().stack]=Object.assign({},e._sentryModuleMetadata[Error().stack],{"_sentryBundlerPluginAppKey:mup-web-next":!0}),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52488],{8522:function(e,t,r){r.d(t,{x:function(){return withErrorHandler}});var n=r(15621),o=r(84500);r(60631),r(88705),r(85332);var s=r(34642);r(13208);var a=r(11527);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function withErrorHandler(e){return t=>null!=t&&t.errorPageProps?(0,a.jsx)(s.Z,_objectSpread({},t.errorPageProps)):(0,a.jsx)(e,_objectSpread({},t))}(0,o.Z)("getServerSide-logger")},23059:function(e,t,r){r.d(t,{s:function(){return buildAllowableActions},C:function(){return useSidebarInfo}});var n=r(15621),o=r(76539),s=r(19515);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let a={},i=o.Ps`
  query getGroupsLeadCountByMemberId($memberId: ID!) {
    member(id: $memberId) {
      id
      memberships(filter: { status: [LEADER] }) {
        totalCount
      }
    }
  }
`;var c=r(19243);function getSidebarInfo_generated_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function getSidebarInfo_generated_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?getSidebarInfo_generated_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):getSidebarInfo_generated_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let l={},u=o.Ps`
  query getSidebarInfo($memberId: ID!) {
    member(id: $memberId) {
      id
      name
      email
      startDate
      memberPhoto {
        id
        baseUrl
      }
      isOrganizer
      isMemberPlusSubscriber
      bio
      city
      state
      country
      socialNetworks {
        url
        service
      }
      allowableActions
      reasonsForJoining
      rsvps(filter: { eventStatus: [PAST] }) {
        totalCount
      }
      memberships(
        filter: { status: [ACTIVE, LEADER] }
        sort: { sortOrder: DESC, sortField: EVENT_DATE }
      ) {
        totalCount
      }
      topics {
        totalCount
      }
      lifeStages(activeOnly: true) {
        id
        name
        active
      }
      memberConnection {
        id
        status
      }
      isDmUnlocked
      isMemberUnlocked
      isFamiliarFace
    }
  }
`,buildAllowableActions=e=>({seeTopics:null==e?void 0:e.includes(c.lOe.SeeTopics),seeGroups:null==e?void 0:e.includes(c.lOe.SeeGroups),seeBio:null==e?void 0:e.includes(c.lOe.SeeBio),seePhotos:null==e?void 0:e.includes(c.lOe.SeePhoto),canMessage:null==e?void 0:e.includes(c.lOe.Message),canBlock:null==e?void 0:e.includes(c.lOe.Block),canUnblock:null==e?void 0:e.includes(c.lOe.Unblock),canReport:null==e?void 0:e.includes(c.lOe.Report),canRemoveConnection:null==e?void 0:e.includes(c.lOe.RemoveConnection)}),useSidebarInfo=e=>{var t,r,n,o,c;let{data:d,loading:b}=function(e){let t=getSidebarInfo_generated_objectSpread(getSidebarInfo_generated_objectSpread({},l),e);return s.aM(u,t)}({variables:{memberId:e},fetchPolicy:"cache-and-network"}),{data:f}=function(e){let t=_objectSpread(_objectSpread({},a),e);return s.aM(i,t)}({variables:{memberId:e},fetchPolicy:"cache-and-network"}),p=null==d?void 0:d.member,y=(null==p?void 0:null===(t=p.memberships)||void 0===t?void 0:t.totalCount)||0,m=(null==p?void 0:null===(r=p.topics)||void 0===r?void 0:r.totalCount)||0,g=(null==p?void 0:null===(n=p.rsvps)||void 0===n?void 0:n.totalCount)||0,O=(null==p?void 0:p.socialNetworks)||[];return{memberProfile:p,isLoading:b&&!p,socialNetworks:O,allowableActions:buildAllowableActions(null==p?void 0:p.allowableActions),groupsCount:y,interestsCount:m,rsvpsCount:g,leadingGroupsCount:null==f?void 0:null===(o=f.member)||void 0===o?void 0:null===(c=o.memberships)||void 0===c?void 0:c.totalCount}}},42029:function(e,t,r){r.d(t,{Cg:function(){return useUnblockMemberMutation},Sz:function(){return useBlockMemberMutation}});var n=r(15621),o=r(76539),s=r(88919);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let a={},i=o.Ps`
  mutation blockMember($memberId: ID!) {
    blockMember(input: { memberId: $memberId }) {
      errors {
        code
        message
      }
      member {
        id
      }
    }
  }
`;function useBlockMemberMutation(e){let t=_objectSpread(_objectSpread({},a),e);return s.D(i,t)}let c=o.Ps`
  mutation unblockMember($memberId: ID!) {
    unblockMember(input: { memberId: $memberId }) {
      errors {
        code
        message
      }
      member {
        id
      }
    }
  }
`;function useUnblockMemberMutation(e){let t=_objectSpread(_objectSpread({},a),e);return s.D(c,t)}},57594:function(e,t,r){r.d(t,{Fk:function(){return l},QR:function(){return useGetConversationsQuery},Rx:function(){return useGetConversationByMemberIdQuery},hA:function(){return useGetConversationQuery},sG:function(){return i}});var n=r(15621),o=r(76539),s=r(19515);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let a={},i=o.Ps`
  fragment ConvoMember on Member {
    id
    name
    allowableActions
    city
    state
    status
    country
    commonGroups(filter: { status: [LEADER, ACTIVE, PENDING] }) {
      totalCount
    }
    memberPhoto {
      id
      highResUrl
    }
  }
`,c=o.Ps`
  fragment ConversationFragment on Conversation {
    id
    type
    title
    hasLeft
    muted
    hasUnreadMessages
    archived
    lastMessageDate
    created
    creator {
      id
    }
  }
`,l=o.Ps`
  query getConversations($status: ConversationStatus, $after: String) {
    conversations(filter: { status: $status }, after: $after) {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          ...ConversationFragment
          lastMessage: messages(first: 1) {
            edges {
              node {
                id
                text
                read
                member {
                  id
                }
              }
            }
          }
          members {
            ...ConvoMember
          }
        }
      }
    }
  }
  ${c}
  ${i}
`;function useGetConversationsQuery(e){let t=_objectSpread(_objectSpread({},a),e);return s.aM(l,t)}let u=o.Ps`
  query getConversation($convoId: ID!, $after: String) {
    conversations(filter: { convoId: $convoId }) {
      totalCount
      edges {
        node {
          ...ConversationFragment
          msgs: messages(after: $after, sortOrder: DESC, first: 20) {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                id
                text
                kind
                member {
                  ...ConvoMember
                }
                updated
                read
              }
            }
          }
          members {
            ...ConvoMember
          }
        }
      }
    }
  }
  ${c}
  ${i}
`;function useGetConversationQuery(e){let t=_objectSpread(_objectSpread({},a),e);return s.aM(u,t)}let d=o.Ps`
  query getConversationByMemberId($memberId: Int!) {
    conversations(filter: { memberId: $memberId }) {
      edges {
        node {
          id
        }
      }
    }
  }
`;function useGetConversationByMemberIdQuery(e){let t=_objectSpread(_objectSpread({},a),e);return s.aM(d,t)}},75263:function(e,t,r){r.d(t,{V:function(){return Dialog}});var n=r(15621),o=r(13135),s=r(41714),a=r(4814),i=r(11527);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let Dialog=e=>{let{title:t,description:r,titleValues:n,descriptionValues:c,confirmLabel:l,onConfirm:u,cancelLabel:d,onCancel:b,children:f,confirmBtnProps:p,confirmTracking:y,cancelTracking:m,tracking:g}=e;return(0,i.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,i.jsx)("h1",{className:"text-2xl font-semibold leading-tight md:text-[1.75rem]",children:(0,i.jsx)(o.Z,_objectSpread(_objectSpread({},t),{},{values:n}))}),r&&(0,i.jsx)("p",{children:(0,i.jsx)(o.Z,_objectSpread(_objectSpread({},r),{},{values:_objectSpread({LINE_BREAK:(0,i.jsx)("br",{})},c)}))}),f,(0,i.jsxs)("div",{className:"flex flex-col space-y-2",children:[l&&(0,i.jsx)(s.zx,_objectSpread(_objectSpread({id:y,"data-event-label":y,"data-event-category":g,className:(0,a.Z)("flex-shrink-1 justify-center",d&&"mb-4 md:mb-0"),variant:s.c7.SECONDARY,onClick:u},p),{},{children:(0,i.jsx)(o.Z,_objectSpread({},l))})),d&&(0,i.jsx)(s.zx,{id:m,"data-event-label":m,"data-event-category":g,className:"justify-center px-2 md:text-left",variant:s.c7.NEUTRAL,ghost:!0,onClick:b,children:(0,i.jsx)(o.Z,_objectSpread({},d))})]})]})}},84500:function(e,t){t.Z=e=>{let log=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];console.log(e,...r)},error=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];console.error(e,...r)},t=new Proxy({},{get:(e,t)=>"error"===t?error:log});return t}}}]);