import React from 'react';

class Site extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.site.name}</td>
        <td><a href={this.props.site.git}>{this.props.site.name}.git</a></td>
        <td><a href={this.props.site.production}>{this.props.site.name}</a></td>
      </tr>
    );
  }
}

export default Site;
