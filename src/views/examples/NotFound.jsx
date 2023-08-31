import React from "react";
import PageTitle from '../../components/layout/PageTitle'


function NotFound(props) {
  return (
    <aside className="not-found">
       <PageTitle error
            title="404"
            subtitle="Opss... Página Não Encontrada!" />
  </aside>
    );
}
export default NotFound;
