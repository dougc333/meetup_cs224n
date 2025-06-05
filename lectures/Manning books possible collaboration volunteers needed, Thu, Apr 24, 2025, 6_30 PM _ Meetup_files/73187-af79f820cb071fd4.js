!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9d038a19-0158-405c-8489-43ed165c52b5",e._sentryDebugIdIdentifier="sentry-dbid-9d038a19-0158-405c-8489-43ed165c52b5")}catch(e){}}();var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};"use strict";e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[Error().stack]=Object.assign({},e._sentryModuleMetadata[Error().stack],{"_sentryBundlerPluginAppKey:mup-web-next":!0}),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73187],{73187:function(e,t,n){n.d(t,{tP:function(){return FindCityPage},ce:function(){return getFindCityPageUrl}});var i=n(50959),a=n(2025),s=n(12932),r=n(62157),o=n(29525),l=n(54423),d=n(40403),c=n(85332),u=n(90480),g=n(2723),y=n(49150),p=n(11527),city_FindCitySeoHead=e=>{let{city:t,isIndexed:n}=e,{asPath:i}=(0,g.useRouter)(),[a]=i.split("?");return(0,p.jsx)(y.ZP,{title:`Events in ${t} | Meetup`,description:`Find events in ${t} to connect with people who share your interests. Whatever your interest, Meetup helps you connect with like-minded people.`,robots:n?"index, follow":"noindex, follow",path:a})},v=n(6671);let $="view-city-page",getSeeAllClickId=e=>`city-page-${e}-see-all-click`,getEventCardClickId=e=>`city-page-${e}-event-card-click`;function FindCityPage(e){let{eventsInLocation:t,todayEvents:n,thisWeekendEvents:g,topicalEvents:y,popularGroups:f,locale:m,cityData:h,isNextWeekend:C,isIndexed:E}=e,k=(0,a.N)(m,"find-city-page"),{key:b,image:I,location:_,locationQueryParam:S}=h,{timeZone:F}=_,x=(0,l.H)(_,u.a),w=_.city,L=(0,i.useMemo)(()=>({userLocation:h.locationQueryParam}),[h.locationQueryParam]);return(0,p.jsx)(s.UI,{searchFilters:L,children:(0,p.jsxs)(o.Z,{noConstraint:!0,pageTrackingId:`${$}_${h.key}`,gtmPageName:`${$}_${h.key}`,headerProps:{className:"xs:mb-0",isSticky:!1,location:_,locationName:h.location.name_string},footerProps:{className:"mt-0"},className:"z-10",children:[(0,p.jsx)(city_FindCitySeoHead,{city:x,isIndexed:E}),(0,p.jsxs)("main",{id:r.Om,children:[(0,p.jsx)("header",{className:"bg-ds-neutral50",children:(0,p.jsx)(v.TB,{className:"py-12 lg:py-20",image:I,longCityName:x,shortCityName:w})}),(0,p.jsx)("article",{children:(0,p.jsx)(v.zW,{className:"py-10 lg:py-16",timeZone:F,events:t,locale:m,title:`Events in ${w}`,subtitle:`Browse the most popular activities in ${w}`,seeAllLink:(0,c.Re3)({queryString:{location:S}}),seeAllEventLabel:getSeeAllClickId(b),cardEventLabel:getEventCardClickId(b),eventOrigin:"city_most_popular_event"})}),E&&(0,p.jsx)("article",{children:(0,p.jsx)(v.tv,{className:"py-10 lg:py-16",title:"What brings you to Meetup today?",pages:u.o.map(e=>({name:e.name,url:`/find/${S}/${e.slug}/`,thumbnail:e.image}))})}),(0,p.jsx)("article",{children:(0,p.jsx)(v.zW,{className:"py-10 lg:py-16",timeZone:F,events:n,locale:m,title:`Events in ${w} today`,subtitle:`Check out the best activities in ${w} today`,seeAllLink:(0,c.Re3)({queryString:{location:S,dateRange:"today"}}),seeAllEventLabel:getSeeAllClickId(b),cardEventLabel:getEventCardClickId(b),eventOrigin:"city_events_today"})}),(0,p.jsx)("article",{children:(0,p.jsx)(v.zW,{className:"py-10 lg:py-16",timeZone:F,events:g,locale:m,title:`Events in ${w} this weekend`,subtitle:`Browse the most interesting activities of the weekend in ${w}`,seeAllLink:(0,c.Re3)({queryString:{location:S,dateRange:C?d.T3.nextWeekend:d.T3.thisWeekend}}),seeAllEventLabel:getSeeAllClickId(b),cardEventLabel:getEventCardClickId(b),eventOrigin:"city_events_this_weekend"})}),(0,p.jsx)("article",{children:(0,p.jsx)(v.Fl,{className:"py-12 lg:py-16",groups:f,title:`Most popular groups in ${w}`,subtitle:"And if you don't find the right group for you, you can always start your own!",seeAllLink:(0,c.Re3)({queryString:{location:S,source:"GROUPS"}}),seeAllEventLabel:"city-popularGroupsList-seeAll",eventOrigin:"city_popular_groups"})}),(0,p.jsx)("article",{className:"bg-ds-neutral50",children:(0,p.jsx)(v.DG,{className:"py-12",city:x,ctaHref:k,ctaEventLabel:"city-start-a-group-button"})}),(0,p.jsx)("article",{children:(0,p.jsx)(v.zW,{className:"py-10 lg:py-16",timeZone:F,events:y,locale:m,title:`Live music events in ${w}`,subtitle:`Find the best activities for music lovers in ${w}`,seeAllLink:(0,c.Re3)({queryString:{location:S,categoryId:395}}),seeAllEventLabel:getSeeAllClickId(b),cardEventLabel:getEventCardClickId(b),eventOrigin:"city_live_music_events"})})]})]})})}n(2972),n(60631),n(68727),n(50381),n(13847),n(19243),n(84770);var f=n(20971),m=n(76539),h=n(25372);m.Ps`
  query getNewCityPageData(
    $lat: Float!
    $lon: Float!
    $firstEventsInLocation: Int!
    $firstTodayEvents: Int!
    $firstThisWeekendEvents: Int!
    $firstTopicalEvents: Int!
    $topicalTopicCategory: ID
    $startDateRange: String
    $todayEnd: String
    $thisWeekendStart: String
    $thisWeekendEnd: String
    $sortField: RecommendedEventsSortField
    $popularGroupsFirst: Int!
    $groupSearchRadius: Int!
    $dataConfiguration: String
  ) {
    eventsInLocation: recommendedEvents(
      filter: {
        lat: $lat
        lon: $lon
        startDateRange: $startDateRange
        eventType: PHYSICAL
        doConsolidateEvents: true
      }
      first: $firstEventsInLocation
      sort: { sortField: $sortField }
      dataConfiguration: $dataConfiguration
    ) {
      edges {
        node {
          ...EventForGuestCard
        }
      }
    }
    todayEvents: recommendedEvents(
      filter: {
        lat: $lat
        lon: $lon
        startDateRange: $startDateRange
        endDateRange: $todayEnd
        eventType: PHYSICAL
        doConsolidateEvents: true
      }
      first: $firstTodayEvents
      sort: { sortField: $sortField }
      dataConfiguration: $dataConfiguration
    ) {
      edges {
        node {
          ...EventForGuestCard
        }
      }
    }
    thisWeekendEvents: recommendedEvents(
      filter: {
        lat: $lat
        lon: $lon
        startDateRange: $thisWeekendStart
        endDateRange: $thisWeekendEnd
        eventType: PHYSICAL
        doConsolidateEvents: true
      }
      first: $firstThisWeekendEvents
      sort: { sortField: $sortField }
      dataConfiguration: $dataConfiguration
    ) {
      edges {
        node {
          ...EventForGuestCard
        }
      }
    }
    popularGroups: recommendedGroups(
      filter: { lat: $lat, lon: $lon, radius: $groupSearchRadius }
      first: $popularGroupsFirst
      ignoreNewGroups: true
    ) {
      edges {
        node {
          ...PopularGroupSearch
          keyGroupPhoto {
            id
            baseUrl
          }
          city
          state
          country
        }
      }
    }
    topicalEvents: recommendedEvents(
      filter: {
        lat: $lat
        lon: $lon
        eventType: PHYSICAL
        startDateRange: $startDateRange
        topicCategoryId: $topicalTopicCategory
        doConsolidateEvents: true
      }
      first: $firstTopicalEvents
      sort: { sortField: $sortField }
      dataConfiguration: $dataConfiguration
    ) {
      edges {
        node {
          ...EventForGuestCard
        }
      }
    }
  }
  ${h.Jp}
  ${h.pK}
`;var C=n(47450);let getFindCityPageUrl=e=>{let{location:t,locale:n=C.ZW}=e;return(0,c.Re3)({term:(0,f.u$)(t,{borough:!1,neighborhood:!1}),locale:n})}}}]);