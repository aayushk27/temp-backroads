function SocialLink({ id, href, icon, childClass }) {
  return (
    <li key={id}>
      <a href={href} target="_blank" rel="noreferrer" className={childClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
}
export default SocialLink;
