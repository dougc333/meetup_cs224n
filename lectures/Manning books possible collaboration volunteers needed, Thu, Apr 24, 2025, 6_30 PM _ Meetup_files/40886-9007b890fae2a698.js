!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="60814ebe-6f3f-4110-9e39-9ee9fc5deb6f",e._sentryDebugIdIdentifier="sentry-dbid-60814ebe-6f3f-4110-9e39-9ee9fc5deb6f")}catch(e){}}();var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};"use strict";e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[Error().stack]=Object.assign({},e._sentryModuleMetadata[Error().stack],{"_sentryBundlerPluginAppKey:mup-web-next":!0}),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40886],{87208:function(e,t,r){r.d(t,{U:function(){return EventsErrorState}});var n=r(15621),o=r(13135),a=r(86379),i=r(4814),l=r(85332),s=r(78887),u=r(33719),d=r(91589),c=r(11527);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let p="/images/shared/ErrorMountainIcon.svg",EventsErrorState=e=>{let{error:t,urlName:r,className:n,type:v,organizer:f}=e,g=u.Z.errorTitle,b=u.Z.upcomingEvent,y=u.Z.errorDescription,E={src:"/images/shared/private.svg",width:400,height:240};return t===s.p.EMPTY?(g=u.Z.emptyEventsTitle,y=u.Z.emptyEventsDescription,E.src=p,v===d.ex.Draft?b=u.Z.draftEventSingleText:v===d.ex.Past&&(b=u.Z.pastEvent)):t===s.p.PRIVATE_GROUP?(g=u.Z.privateEventsTitle,y=u.Z.privateEventsDescription):t===s.p.NO_GROUP&&(g=u.Z.groupNotFoundTitle,y=u.Z.groupNotFoundDescription,E.src=p),(0,c.jsxs)("div",{className:(0,i.Z)("flex flex-col items-center space-y-3",n),children:[(0,c.jsx)("h1",{className:"ds-font-title-3",children:(0,c.jsx)(o.Z,_objectSpread(_objectSpread({},g),{},{values:{EVENT:(0,c.jsx)("span",{className:"lowercase",children:(0,c.jsx)(o.Z,_objectSpread({},b))})}}))}),(0,c.jsx)("p",{children:(0,c.jsx)(o.Z,_objectSpread(_objectSpread({},y),{},{values:{PRIVATE_JOIN_LINK:(0,c.jsx)("a",{className:"text-viridian",href:(0,l.U64)(r),children:(0,c.jsx)(o.Z,_objectSpread({},u.Z.privateEventsJoinLink))}),PRIVATE_CONTACT_LINK:(0,c.jsx)("a",{className:"text-viridian",href:(0,l.fdm)(null==f?void 0:f.id,null==f?void 0:f.name),children:(0,c.jsx)(o.Z,_objectSpread({},u.Z.privateEventsContactLink))}),EVENT:(0,c.jsx)("span",{className:"lowercase",children:(0,c.jsx)(o.Z,_objectSpread({},b))})}}))}),(0,c.jsx)("div",{children:(0,c.jsx)(a.Z,{className:"object-cover",src:E.src,width:E.width,height:E.height,alt:"error"})})]})}},88988:function(e,t,r){r.d(t,{z:function(){return EventsHeader}});var n=r(15621),o=r(19786),a=r.n(o),i=r(13135),l=r(26617),s=r(4814),u=r(85332),d=r(33719),c=r(12893),p=r(11527);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let v="p-2 border border-gray5 flex flex items-center hover:no-underline font-medium text-gray6 space-x-1 px-5 outline-offset-0",f="bg-gray2",EventsHeader=e=>{let{urlname:t,isListActive:r}=e;return(0,p.jsxs)("div",{className:"flex",children:[(0,p.jsxs)(a(),{href:(0,u.Q_7)(t),className:(0,s.Z)(v,"rounded-l-lg",r?f:""),id:c.e.LINK_EVENTS,"data-test-id":c.e.LINK_EVENTS,"data-event-label":c.e.LINK_EVENTS,"data-event-category":c.e.GTM_TRACKING,children:[(0,p.jsx)(l.ZP,{icon:"menu",outline:!0,svgClassName:"text-gray6"}),(0,p.jsx)("span",{children:(0,p.jsx)(i.Z,_objectSpread({},d.Z.eventList))})]}),(0,p.jsxs)(a(),{href:(0,u.edV)(t),rel:"nofollow",className:(0,s.Z)(v,"rounded-r-lg border-l-0",r?"":f),id:c.e.LINK_EVENTS_CALENDAR,"data-test-id":c.e.LINK_EVENTS_CALENDAR,"data-event-label":c.e.LINK_EVENTS_CALENDAR,"data-event-category":c.e.GTM_TRACKING,children:[(0,p.jsx)(l.ZP,{icon:"calendar",outline:!0,svgClassName:"text-gray6"}),(0,p.jsx)("span",{children:(0,p.jsx)(i.Z,_objectSpread({},d.Z.eventCalendar))})]})]})}},30082:function(e,t,r){r.d(t,{F:function(){return PageWrapper}});var n=r(29525),o=r(12893),a=r(11527);let PageWrapper=e=>(0,a.jsx)(n.Z,{pageTrackingId:o.e.MEETUP_TRACKING,gtmPageName:o.e.GTM_TRACKING,noConstraint:!0,className:"flex w-full flex-col items-center",headerProps:{className:"xs:mb-0"},footerProps:{className:"xs:mt-0"},children:e.children})},88946:function(e,t,r){r.d(t,{DP:function(){return useGetUpcomingGroupEventsQuery},Hw:function(){return useGetPastGroupEventsQuery},Uu:function(){return useGetDraftGroupEventsQuery}});var n=r(15621),o=r(76539),a=r(28439),i=r(19515);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let l={},s=o.Ps`
  query getUpcomingGroupEvents($urlname: String!, $after: String, $afterDateTime: DateTime) {
    groupByUrlname(urlname: $urlname) {
      id
      organizer {
        isStarterOrganizer
      }
      events(
        filter: { status: [ACTIVE, PAST, CANCELLED], afterDateTime: $afterDateTime }
        sort: ASC
        first: 30
        after: $after
      ) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            ...CoreGroupHomeEvent
          }
        }
      }
    }
  }
  ${a.Yi}
`;function useGetUpcomingGroupEventsQuery(e){let t=_objectSpread(_objectSpread({},l),e);return i.aM(s,t)}let u=o.Ps`
  query getPastGroupEvents($urlname: String!, $after: String, $beforeDateTime: DateTime) {
    groupByUrlname(urlname: $urlname) {
      id
      organizer {
        isStarterOrganizer
      }
      events(
        filter: { status: [ACTIVE, PAST, CANCELLED], beforeDateTime: $beforeDateTime }
        sort: DESC
        first: 10
        after: $after
      ) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            ...CoreGroupHomeEvent
          }
        }
      }
    }
  }
  ${a.Yi}
`;function useGetPastGroupEventsQuery(e){let t=_objectSpread(_objectSpread({},l),e);return i.aM(u,t)}let d=o.Ps`
  query getDraftGroupEvents($urlname: String!, $after: String) {
    groupByUrlname(urlname: $urlname) {
      id
      organizer {
        isStarterOrganizer
      }
      events(filter: { status: [DRAFT, AUTOSCHED_DRAFT] }, sort: DESC, first: 10, after: $after) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            ...CoreGroupHomeEvent
          }
        }
      }
    }
  }
  ${a.Yi}
`;function useGetDraftGroupEventsQuery(e){let t=_objectSpread(_objectSpread({},l),e);return i.aM(d,t)}},78887:function(e,t,r){let n;r.d(t,{R:function(){return useGroupEvents},p:function(){return n}});var o,a=r(15621),i=r(21058),l=r(80785),s=r(66292),u=r.n(s),d=r(2600),c=r.n(d),p=r(2723),v=r(50959),f=r(16159),g=r(81734),b=r(84895),y=r(19577),E=r(41185),m=r(89030),j=r(88946),O=r(91589);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}(o=n||(n={})).EMPTY="EMPTY",o.PRIVATE_GROUP="PRIVATE_GROUP",o.ERROR="ERROR",o.NO_GROUP="NO_GROUP";let useGroupEvents=e=>{var t,r,o,a,s,d,_,P,S,N,T,h,x,D,w,C,I,U;let R;let{externalType:G}=e,A=(0,v.useRef)(new Date().toISOString()),{query:Z}=(0,p.useRouter)(),{slug:K}=Z||{},M=G||(null==Z?void 0:Z[O.Fi])||O.ex.Upcoming,L=decodeURIComponent(null==K?void 0:K.toString()),{user:k}=(0,f.Z)(),{data:V,loading:B,error:$}=(0,y.ld)({variables:{urlname:L,hasSimilarSection:!0},skip:!L}),H=null==V?void 0:V.groupByUrlname,{timezone:z,id:F,isMember:Q,isPrivate:Y,organizer:q,proNetwork:J,membershipMetadata:W,featuredEvent:X,topicCategory:ee,activeTopics:et,lat:er,lon:en}=H||{},eo=(0,g.OT)(null==W?void 0:W.role),{data:ea,loading:ei,fetchMore:el}=(0,j.DP)({variables:{urlname:L,afterDateTime:A.current},skip:M!==O.ex.Upcoming}),{data:es,loading:eu,fetchMore:ed}=(0,j.Hw)({variables:{urlname:L,beforeDateTime:A.current}}),{data:ec,loading:ep,fetchMore:ev}=(0,j.Uu)({variables:{urlname:L},skip:M!==O.ex.Draft||!eo}),ef=null==X?void 0:X.id,eg=(0,m.gg)(null==ea?void 0:null===(t=ea.groupByUrlname)||void 0===t?void 0:null===(r=t.events)||void 0===r?void 0:r.edges,{timezone:z,featuredId:ef}),eb=(0,m.gg)(null==es?void 0:null===(o=es.groupByUrlname)||void 0===o?void 0:null===(a=o.events)||void 0===a?void 0:a.edges,{timezone:z,featuredId:ef}),ey=(0,m.gg)(null==ec?void 0:null===(s=ec.groupByUrlname)||void 0===s?void 0:null===(d=s.events)||void 0===d?void 0:d.edges,{timezone:z,featuredId:ef}),eE=!F||B,{0:em,1:ej}=(0,v.useState)(!1),eO=ei||eu||ep||em,[e_,eP,eS]=M===O.ex.Draft?[ey,ev,null==ec?void 0:null===(_=ec.groupByUrlname)||void 0===_?void 0:null===(P=_.events)||void 0===P?void 0:P.totalCount]:M===O.ex.Past&&[eb,ed,null==es?void 0:null===(S=es.groupByUrlname)||void 0===S?void 0:null===(N=S.events)||void 0===N?void 0:N.totalCount]||[eg,el,null==ea?void 0:null===(T=ea.groupByUrlname)||void 0===T?void 0:null===(h=T.events)||void 0===h?void 0:h.totalCount],{hasNextPage:eN,endCursor:eT}=(M===O.ex.Draft?null==ec?void 0:null===(x=ec.groupByUrlname)||void 0===x?void 0:null===(D=x.events)||void 0===D?void 0:D.pageInfo:M===O.ex.Past&&(null==es?void 0:null===(w=es.groupByUrlname)||void 0===w?void 0:null===(C=w.events)||void 0===C?void 0:C.pageInfo)||(null==ea?void 0:null===(I=ea.groupByUrlname)||void 0===I?void 0:null===(U=I.events)||void 0===U?void 0:U.pageInfo))||{},eh=M===O.ex.Past,ex=M===O.ex.Draft,eD=(0,v.useMemo)(()=>u()(async()=>{if(eN&&!eO){ej(!0);try{await eP({variables:{urlname:L,after:eT},updateQuery:(e,t)=>{var r,n,o,a,i;let{fetchMoreResult:l}=t,s=null==e?void 0:null===(r=e.groupByUrlname)||void 0===r?void 0:null===(n=r.events)||void 0===n?void 0:n.edges;return _objectSpread(_objectSpread({},e),{},{groupByUrlname:_objectSpread(_objectSpread({},null==e?void 0:e.groupByUrlname),{},{events:_objectSpread(_objectSpread({},null==l?void 0:null===(o=l.groupByUrlname)||void 0===o?void 0:o.events),{},{edges:c()([...s,...null==l?void 0:null===(a=l.groupByUrlname)||void 0===a?void 0:null===(i=a.events)||void 0===i?void 0:i.edges],"node.id")})})})}})}catch(e){l.Tb(e)}finally{ej(!1)}}},500,{leading:!0}),[eN,eO,eP,L,eT]),[ew,eC]=(0,E.u)({topicCategory:ee,activeTopics:et,sampleEvents:[M!==O.ex.Draft?null==e_?void 0:e_[0]:X,null==eg?void 0:eg[0],null==eb?void 0:eb[0],X].filter(Boolean),lat:er,lon:en}),eI=(0,i.x)(),eU=(0,v.useCallback)(e=>{let t=null==eI?void 0:eI.cache;e&&t&&(t.evict({id:t.identify({__typename:"Event",id:e}),broadcast:!0}),t.gc())},[null==eI?void 0:eI.cache]);$?R=(0,b.bh)($,"UNAUTHENTICATED")?n.PRIVATE_GROUP:n.ERROR:null===H&&(R=n.NO_GROUP);let eR=!eE&&0===eS,eG=(0,g.OT)(null==W?void 0:W.role),eA=eR&&M===O.ex.Upcoming&&eG;return{isEmpty:eR,type:M,canManage:eG,loading:eE,dynamicLoading:eO,user:k,events:e_,fetchEvents:eD,hasNextPage:eN,urlname:L,timezone:z,headerData:H,groupId:F,isPast:eh,isDraft:ex,isPro:!!J,isOrg:eo,isOrganizerStarter:null==q?void 0:q.isStarterOrganizer,isMember:Q,isPrivate:Y,error:R,similarParams:ew,category:eC,topics:et,featuredId:ef,modifyRefetch:eU,role:null==W?void 0:W.role,showCreateEventNudge:eA}}},12893:function(e,t,r){r.d(t,{e:function(){return o}});let n="GroupEvents",o={MEETUP_TRACKING:n,GTM_TRACKING:n,LINK_EVENTS:"events-list-link",LINK_EVENTS_CALENDAR:"events-calendar-link",LINK_UPCOMING_EVENTS:"events-upcoming-link",LINK_PAST_EVENTS:"events-past-link",LINK_DRAFT_EVENTS:"events-draft-link",BTN_REMOVE_ADS:"removeAds-groupHome-events"}},91589:function(e,t,r){var n;let o;r.d(t,{Fi:function(){return a},ex:function(){return o}});let a="type";(n=o||(o={})).Draft="draft",n.Past="past",n.Upcoming="upcoming"}}]);