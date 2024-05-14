import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';

const data = [
  {
    title: 'Useful Links',
    links: [
      { label: 'Site Map', link: '#' },
      { label: 'Privacy Policy', link: '#' },
      { label: 'Terms of Use', link: '#' },
      { label: 'Community Support', link: '#' },
      { label: 'Assessment', link: '#' },
    ],
  },
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
            <Image src="./3DiF-Blue.png" />
            <Text size="xs" c="dimmed" className={classes.description}>
                Inspiring Game Changers through Vision, Alignment & Execution
            </Text>
        </div>
        <div className={classes.groups}>
            <div className={classes.wrapper}>
                <Text className={classes.title}>Contact Us</Text>
                <Text className={classes.text}>
                    Phone: 571.341.5060 <br/>
                    Email: info@3dif.co
                </Text>
            </div>
            <div className={classes.wrapperContact}>
                <Text className={classes.title}>Find Us</Text>
                <Text className={classes.text}>
                    HUBZone Address <br/>
                    2 Eaton Street, Suite 704 <br/>
                    Hampton, VA 23669-4055
                </Text>
                <Text className={classes.text}>
                    Unique Entity ID: RHDCBKZ3LN35 <br/>
                    Cage Code: 6E8B8
                </Text>
            </div>
            {groups}
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} 3DiF. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}